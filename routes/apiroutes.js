
const fs = require("fs");
const path = require("path");

const noteText = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../db/db.json"), (err, text) => {
    if (err) throw err;
  })
);

function writenoteText(noteText) {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteText),
    err => {
      if (err) throw err;
    }
  );
}

module.exports = app => {
  app.get("/api/notes", (req, res) => res.json(noteText));



  app.post('/api/notes', (req,res) => {
    let newNote = req.body; 
    console.log("newNote: " + newNote);
    console.log("data: ", data);
    data.push(newNote);
    console.log("new note pushed");
      fs.writeFileSync(
        path.join(__dirname,"../db/db.json"),
        JSON.stringify(data),
        console.log("data passed through JSON.stringify"),
        err => {
        if (err) throw err;
        }
      );

      return res.json(data);
  });
  
};


