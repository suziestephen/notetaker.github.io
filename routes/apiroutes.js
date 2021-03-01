const fs = require("fs");
const notesData = require("../db/db.json");


module.exports = app => {



    function writeNoteText(notes){

        notes = JSON.stringify(notes);
        console.log (notes);

        fs.writeFileSync("../db/db.json", notes, function(err){
            if (err) {
                return console.log(err);
            }
        });
    }


    app.get("/api/notes", (req, res) => {
        res.json(notesData);
    });

    app.post("/api/notes", (req, res) => {

        writeNoteText(notesData);
        console.log(notesData);

        res.json(req.body);
    });
  };