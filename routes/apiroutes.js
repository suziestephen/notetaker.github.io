const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../db/db.json"), (err) => {
    if (err) throw err;
  })
);

console.log("data: ", data);



module.exports = app => {
  app.get("/api/notes", (req, res) => res.json(data));


  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    console.log("newNote: " + newNote);
    console.log("data: ", data);
    data.push(newNote);
    console.log("NEW NOTE");
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify(data),
            err => {
            if (err) throw err;
            }
        );
        return res.json(data);
        });

        app.get("api/notes/:id", function(req,res) {
            res.json(data[req.params.id]);
            console.log("item selected")
           });
  
};