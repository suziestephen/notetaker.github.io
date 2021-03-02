const fs = require("fs");
const path = require("path");

const noteText = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../db/db.json"), (err, text) => {
    if (err) throw err;
  })
);

console.log("text: ", noteText);



module.exports = app => {
  app.get("/api/notes", (req, res) => res.json(noteText));


  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    console.log("newNote: " + newNote);
    console.log("text: ", noteText);
    data.push(newNote);
    console.log("NEW NOTE");
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify(noteText),
            err => {
            if (err) throw err;
            }
        );
        return res.json(noteText);
        });

        app.get("api/notes/:id", function(req,res) {
            res.json(noteText[req.params.id]);
            console.log("item selected")
           });
  
};