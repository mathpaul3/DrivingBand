const showMainPage = (req, res) => {
  let num = 1;
  res.render("main/index", {
    num
  });
};

const showCategoryPage = (req, res) => {
  let num = 2;
  res.render("main/category", {
    num
  });
};

const showTmapPage = (req, res) => {
  let num = 3;
  res.render("Tmap/index", {
    num
  });
};



module.exports = {
  showMainPage,
  showCategoryPage,
  showTmapPage,
};