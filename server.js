const http = require("http");
const fs = require("fs");
const lodash = require("lodash");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method);

  //   console.log("server has been created");
  //   res.end();

  let sum = lodash.sum([1, 5, 7, 8]);
  console.log(sum);

  let rnumber = lodash.random(0, 20);
  console.log(`Random number: ${rnumber}`);

  res.setHeader("Content-type", "text/html");
  //   res.write("<head><link></link></head>");
  //   res.write("<h1>Hello World</h1>");
  //   res.write("<p>This is a paragraph</p>");
  //basic routing
  let path = "";
  if (req.url == "/" || req.url == "/index") {
    path = "./views/index.html";
    res.statusCode = 200;
  } else if (req.url == "/about") {
    path = "./views/about.html";
    res.statusCode = 200;
  } else if (req.url == "/about-us") {
    res.statusCode = 301;
    res.setHeader("Location", "/about");
  } else {
    path = "./views/404.html";
    res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(5000, "localhost", () => {
  console.log("Server is listening on Localhost:5000");
});
