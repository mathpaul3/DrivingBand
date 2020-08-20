const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const showSignupPage = (req, res) => {
  res.render("user/signup");
};

const showLoginPage = (req, res) => {
  res.render("user/login");
};

const signup = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).send("필수값 미입력");

  // 이미 있는 회원인지 확인
  UserModel.findOne({ email }, (err, result) => {
    if (err) return res.status(500).send("오류 발생");
    if (result) return res.status(409).send("이미 사용중인 이메일입니다");

    //여기부터 회원가입
    const saltRounds = 10; // salt 자릿수
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) return res.status(500).send("암호화 오류");

      const user = new UserModel({ name, email, password: hash });
      user.save((err, result) => {
        if (err) return res.status(500).send("오류 발생");
        res.status(201).json(result);
      });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send("필수값 미입력");

  UserModel.findOne({ email }, (err, user) => {
    if (err) return res.status(500).send("오류 발생");
    if (!user) return res.status(404).send("가입하지 않은 계정");

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send("오류 발생");
      if (!isMatch) return res.status(400).send("비밀번호 불일치");

      // 비밀번호 검증 성공 => signed 토큰 생성 발급
      const token = jwt.sign(user._id.toHexString(), "secretKey");

      UserModel.findByIdAndUpdate(user._id, { token }, (err, result) => {
        if (err) return res.status(500).send("오류 발생");
        if (!result) return res.status(400).send("오류 발생");

        // 쿠키로 토큰 저장
        res.cookie("token", token, { httpOnly: true });
        res.json(result);
      });
    });
  });
};

const logout = (req, res) => {
  // 쿠키에서 토큰 가져오기
  const token = req.cookies.token;
  if (!token) return res.render("user/login");

  jwt.verify(token, "secretKey", (err, _id) => {
    if (err) return res.status(500).send("오류 발생");
    UserModel.findByIdAndUpdate(_id, { token: "" }, (err, result) => {
      if (err) return res.status(500).send("오류 발생");
      res.clearCookie("token");
      res.redirect("/");
    });
  });
};

const checkAuth = (req, res, next) => {
  // 모든 화며네서 공통으로 필요한 데이터
  res.locals.user = null;

  const token = req.cookies.token;

  if (!token) {
    // 정상적인 경우
    if (
      req.url === "/" ||
      req.url === "/user/login" ||
      req.url === "/user/signup"
    )
      return next();
    // 비정상적인 경우
    else return res.redirect("/user/login");
  }

  // 토큰 검증
  jwt.verify(token, "secretKey", (err, _id) => {
    if (err) {
      res.clearCookie("token");
      return res.render("user/login");
    }

    UserModel.findOne({ _id, token }, (err, user) => {
      if (err) return res.status(500).send("오류 발생");
      if (!user) return res.render("user/login");
      res.locals.user = {
        name: user.name,
        role: user.role,
      };
      next();
    });
  });
};

module.exports = {
  showSignupPage,
  showLoginPage,
  signup,
  login,
  logout,
  checkAuth,
};
