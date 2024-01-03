import STATUS_CODE from "../constants/statusCodes.js";
import { readSongsFromFile, writeSongsToFile } from "../models/songModel.js";
import { v4 as uuidv4 } from "uuid";

// @des      Get all the songs
// @route    GET /api/v1/songs
// @access   Public
export const getAllSongs = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

// @des      Get a single song
// @route    GET /api/v1/songs/:id
// @access   Public
export const getSongById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

// @des      Create a song
// @route    POST /api/v1/songs
// @access   Public
export const createSong = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(STATUS_CODE.BAD_REQUEST);
    next(error);
  }
};

// @des      Update a song
// @route    PUT /api/v1/songs/:id
// @access   Public
export const updateSong = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

// @des      delete a song
// @route    DELETE /api/v1/songs/:id
// @access   Public
export const deleteSong = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
