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

const showSequencer = (req, res) => {

  const {
    kick,
    snare,
    clap,
    crash
  } = req.body;

  const musicSheet = {
    kick,
    snare,
    clap,
    crash
  };
  console.log(musicSheet);

  res.json(musicSheet);

};





module.exports = {
  showMainPage,
  showCategoryPage,
  showTmapPage,
  showSequencer,
};