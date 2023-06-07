const express = require("express");
const router = express.Router();
const { controller } = require("./getControllers");

router.get("/getPhotos", async (req, res) => {
  try {
    // const category = req.query.category || "";
    // const page = req.query.page || 1;
    const page = req.body.page || 1;
    const category = req.body.category || "";
    console.log(req.body);
    const photos = await controller.getPhotosController(category,page);
    console.log(photos);
    res.status(200).json(photos);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
