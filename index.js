const express = require("express");
const bodyParser = require("body-Parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));
app.set("view engine", "ejs");

let todos = []

app.get("/", (req, res) => {
    res.render("index", {todos});
});

app.post("/add", (req, res) => {
    const newtodo =req.body.todo
    if (newtodo) todos.push(newtodo);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect("/");
});

const PORT = 3000
app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)});