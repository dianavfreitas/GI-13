const express = require("express");
const { fetchMovies } = require("./fetchMovies");

const app = express();
const port = 3000;

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/search", async (req, res) => {
  const movieName = req.body.movieName;
  const movieDetails = await fetchMovies(movieName);
  if (movieDetails) {
    res.send(` `);
  } else {
    res.send(` `);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});