const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const compression = require("compression");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(compression());
// Define any API routes before this runs
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
