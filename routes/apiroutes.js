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

  app.post("/api/notes", (req, res) => {
    let data = req.body;
    data.id = getId(noteText);
    noteText.push(data);
    writenoteText(noteText);
    return res.json(noteText);
  });
  
};