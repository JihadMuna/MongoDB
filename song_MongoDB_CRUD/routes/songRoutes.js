import express from "express";
import {
  createSong,
  deleteSong,
  getAllSongs,
  getSongById,
  updateSong,
} from "../controllers/songController.js";

const router = express.Router();

// Route to get all Songs
router.get("/", getAllSongs);

// Route to get a single Song by ID
router.get("/:id", getSongById);

// Route to create a new movie
router.post("/", createSong);

// Route to update an existing Song
router.put("/:id", updateSong);

// Rout to delete a Song
router.delete("/:id", deleteSong);

export default router;
