const express = require("express");
const { fetchMovies } = require("./fetchMovies");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(``);
});

app.post("/search", async (req, res) => {
  const movieName = req.body.productName;
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