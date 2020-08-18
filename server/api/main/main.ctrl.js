const showMainPage = (req, res) => {
  let num = 1;
  res.render("main/index", {
    num
  });
};
const musicSheet = {
  'a': 'asds',
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
  let num = 4;
  res.render("main/sequencer", {
    num,
    musicSheet
  });
};


const Sequencer = (req, res) => {

  const {
    kick,
    snare,
    clap,
    crash
  } = req.body;

  musicSheet = {
    kick,
    snare,
    clap,
    crash
  };


  res.json(musicSheet);

};





module.exports = {
  showMainPage,
  showCategoryPage,
  showTmapPage,
  showSequencer,
  Sequencer,
};