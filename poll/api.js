const { ifError } = require("assert");
const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

const PORT = 3001;

app.get("/", (req, res) => {
    res.send("home");
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/submit-form", (req, res) => {
    let poll = {
        name: req.body.name,
        choices: req.body.choices.split(","),    
    }

    let data = JSON.stringify(poll,""," ");
    fs.writeFileSync("db.json", data);

    res.json(poll);
})

app.get("/vote", (req, res) => {
    const name = req.query.name || "No name";

    res.render("vote", {name: name});
})

app.listen(PORT, () => {
    console.log(`Server is listening on  ${PORT}`);
});