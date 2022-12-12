const express = require("express");
const router = express.Router();
const mainController = require("../Controllers/mainController");

router.get("/", mainController.getIndex);
router.get("/index", mainController.getIndex);
router.get("/about", mainController.getAbout);
router.get("/about-us", mainController.getAbout);
router.get("/create", mainController.getCreate);
router.post("/create", mainController.postCreate);
router.get("/viewone/:id", mainController.viewone);
router.get("/update/:id", mainController.getupdate);
router.get("/delete/:id", mainController.getdelete);
router.post("/update", mainController.postupdate);
module.exports = router;
