

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,"../develop/public")));


require("./routes/apiroutes")(app);
require("./routes/htmlroute")(app);


app.listen(PORT, () => console.log("App listening on PORT: " + PORT));