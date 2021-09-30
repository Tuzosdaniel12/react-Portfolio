const express = require("express");
const compression = require("compression");

const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));
app.use(express.static("public"));

app.use(compression());
// Define any API routes before this runs
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT-1} !`);
});
