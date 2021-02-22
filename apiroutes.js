"use strict";

const fs = require("fs");
const path = require("path");

const noteText = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./db/db.json"), (err, data) => {
    if (err) throw err;
  })
);

function writenoteText(noteText) {
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(noteText),
    err => {
      if (err) throw err;
    }
  );
}

function getId(noteText) {
  if (noteText.length === 0) {
    return 0;
  }

  noteText.sort((a, b) => a.id - b.id);

  const nextIndexAfterLast = noteText.length;
  for (let i = 0; i < nextIndexAfterLast; i++) {
    if (noteText[i].id !== i) {
      return i;
    }
  }

  return nextIndexAfterLast;
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

  app.delete("/api/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < noteText.length; ++i) {
      if (id === noteText[i].id) {
        noteText.splice(i, 1);
        return;
      }
    }
    writenoteText(noteText);
    res.send(noteText);
  });
};