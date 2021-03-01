
const fs = require("fs");
const path = require("path")
const notesData = require(path.join(__dirname,"../db/db.json"));

module.exports = app => {

function writenoteText(notes){

  notes = JSON.stringify(notes);
  console.log (notes);

  fs.writeFileSync(path.join(__dirname,"../db/db.json"), notes, function(err){
      if (err) {
          return console.log(err);
      }
  });
}


  app.get("/api/notes", (req, res) => 
    res.json(notesData));

  app.post("/api/notes", (req, res) =>
    noteText.push(req.body));

    writenoteText(notesData);
    console.log(notesData);

    res.json(req.body);
};







