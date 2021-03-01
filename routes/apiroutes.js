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

    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

    app.get("/", function(req, res){
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res){

        writeNoteText(notesData);
        console.log(notesData);

        res.json(req.body);
    });
  };