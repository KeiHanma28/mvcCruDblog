const { Router } = require("express");
const express = require("express");
const router = express.Router();

//getStudentInfo, updateStudentInfo,

router.get("/", (req, res) => {
  res.send("This is student route get request index");
});

router.get("/getStudentDetails", (req, res) => {
  res.send("This is get request getStudentDetails");
});

module.exports = router;
