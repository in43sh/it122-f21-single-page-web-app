// Import
const express = require("express");

const app = express();

// const port = 3000;

// app.set('port', process.env.PORT || 3000)

const port = process.env.PORT || 3000;
const path = require("path");
const router = express.Router();

// Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

// Set Routes
app.get("", (req, res) => {
    res.render("index", { text: "This is EJS" });
});

app.get("/about", (req, res) => {
    res.render("about", { text: "About Us" });
});

app.get("/post", (req, res) => {
    res.render("post", {
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit"',
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", { text: "Contact Us" });
});

// app.get('/dogs', (req, res) => {
//   // res.render('dogs', {text: 'Dogs'})
//   res.sendFile('dogs.html');
// });

app.get("/dogs", function (req, res) {
    console.log("path: " + path.join(__dirname, "public/dogs.html"));
    res.sendFile(path.join(__dirname + "/views/dogs.html"));
    //__dirname : It will resolve to your project folder.
});

// let listener = app.listen();
// console.log(`Listening to port number ${listener.address().port}`);
const server = app.listen(port, () =>
    console.log(`Listening on port: ${port}`)
);
