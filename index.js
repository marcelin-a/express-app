// js

const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

// Create PATH "/" (root)
const getwelcome = (req, res) => {
    res.send("Welcome to my favourite movie list");
  };
  
app.get("/", getwelcome);

// Create PATH "/api/movies"
const getmovies = (req, res) => {
    res.status(200).json(movies);
  };
  
app.get("/api/movies", getmovies);

// Create PATH "/api/movies/:id"
app.get('/api/movies/:id', (req, res) => {
  const cineid = Number(req.params.id)
  const cine = movies.find(cine => cine.id === cineid)

      if (!cine) {
      return res.status(404).send('Not Found')
  }
  res.status(200).json(cine)
})

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
