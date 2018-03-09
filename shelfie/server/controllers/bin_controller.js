module.exports = {
  getBin: (req, res) => {
    const db = req.app.get("db");
    const id = req.params.id;
    db
      .get_bin([id])
      .then(bin => res.status(200).send(bin))
      .catch(err => res.status(500).send(err));
  },
  updateBin: (req, res) => {
    const db = req.app.get("db");
    const id = req.params.id;
    db
      .update_bin([id, req.query.name, req.query.price])
      .then(bin => res.status(200).send(bin))
      .catch(err => res.status(500).send(err));
  },
  deleteBin: (req, res) => {
    const db = req.app.get("db");
    const id = req.params.id;
    db
      .delete_bin([id])
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  },
  createBin: (req, res) => {
    const db = req.app.get("db");
    const id = req.params.id;
    db
      .create_bin([id, req.query.name, req.query.price])
      .then(bin => {
        res.status(200).send(bin);
      })
      .catch(err => res.status(500).send(err));
  },
  getShelf: (req, res) => {
    const db = req.app.get("db");
    const shelfLetter = req.params.id;
    db
      .get_shelf([shelfLetter])
      .then(shelf => {
        res.status(200).send(shelf);
      })
      .catch(err => res.status(500).send(err));
  }
};
