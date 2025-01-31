import { Router } from "express";
const router = Router();
import Movie, { find } from "../models/Movie";

// 📌 Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// 📌 Add a new movie
router.post("/", async (req, res) => {
  try {
    const { title, image, genre, rating, releaseDate } = req.body;
    const newMovie = new Movie({ title, image, genre, rating, releaseDate });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});

export default router;

