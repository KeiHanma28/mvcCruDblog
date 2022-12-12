const { result, update } = require("lodash");
const con = require("../db/connection");
const getIndex = (req, res) => {
  // let blogs = [
  //   {
  //     title: "This is my first blog",
  //     content: "This is the content of my first blog",
  //   },
  //   {
  //     title: "This is my second blog",
  //     content: "This is the content of my second blog",
  //   },
  //   {
  //     title: "This is my third blog",
  //     content: "This is the content of my third blog",
  //   },
  // ];

  const sql = "SELECT * FROM blogs";
  con.query(sql, (err, result) => {
    if (err) console.log(err.message);
    else {
      const message = req.flash("message");
      res.render("index", {
        title: "index",
        username: "rhenel",
        blogs: result,
        message,
      });
    }
  });
  //res.send("<h1>Welcome, Homepage</h1>");
  // res.sendFile("./views/index.html", { root: __dirname });
};

const getAbout = (req, res) => {
  //   res.send("<h1>This is about page</h1>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "about page" });
};

const getCreate = (req, res) => {
  res.render("create", { title: "Create new", username: "Rhenel" });
};

const postCreate = (req, res) => {
  // console.log("This is a post request");
  // console.log(req.body);
  // res.send(req.body);
  // res.render("create", {
  //   title: "Create new",
  //   username: "Rhenel",
  //   data: req.body,
  // });
  //Execute insert statement

  let title = req.body.title;
  let content = req.body.content;
  let snippet = req.body.snippet;

  const sql = "INSERT INTO blogs VALUES (NULL, ?, ?, ?)";

  con.query(sql, [title, content, snippet], (err) => {
    if (err) console.log(err.message);
    else {
      req.flash("message", "Insert record successful");
      res.redirect("/");
    }
  });
};
const viewone = (req, res) => {
  // res.send("Search Blog ID " + req.params.id);
  const id = req.params.id;
  // res.send("This is viewone function : ID is " + id);
  const sql = "SELECT * FROM blogs WHERE id=?";
  con.query(sql, [id], (err, result) => {
    if (err) console.log(err.message);
    else {
      res.send(result);
    }
  });
};

const getupdate = (req, res) => {
  const id = req.params.id;
  // res.send("This is viewone function : ID is " + id);
  const sql = "SELECT * FROM blogs WHERE id=?";
  con.query(sql, [id], (err, result) => {
    if (err) console.log(err.message);
    else {
      // res.send(result);
      res.render("update", { title: "update page", result });
    }
  });
  // res.send(id);
};

const postupdate = (req, res) => {
  // res.send(req.body);
  const bid = req.body.bid;
  const title = req.body.title;
  const snippet = req.body.snippet;
  const content = req.body.content;

  const sql = "UPDATE blogs SET title=?, snippet=?, content=? WHERE id=?";
  con.query(sql, [title, snippet, content, bid], (err) => {
    if (err) console.log(err.message);
    else {
      req.flash("message", "Record Updated successfully");
      res.redirect("/index");
    }
  });
};

const getdelete = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM blogs WHERE id=?";
  con.query(sql, [id], (err) => {
    if (err) console.log(err.message);
    else {
      req.flash("message", "REcord Deleted");
      res.redirect("/index");
    }
  });
  // res.send(id);
};

module.exports = {
  getIndex,
  getAbout,
  getCreate,
  postCreate,
  viewone,
  getupdate,
  postupdate,
  getdelete,
};
