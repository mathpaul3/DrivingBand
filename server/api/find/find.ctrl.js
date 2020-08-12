const findRoad = (req, res) => {
  req.body;
  let num = 4;
  res.render("Tmap/getLatLng", { num });
};

module.exports = {
  findRoad,
};
