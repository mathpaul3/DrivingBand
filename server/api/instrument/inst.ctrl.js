const create = (req, res) => {
    const {
        num,
        kick,
        snare,
        crash,
        clap
    } = req.body;
    res.status(201).json(result);

};

module.exports = {
    create,
};