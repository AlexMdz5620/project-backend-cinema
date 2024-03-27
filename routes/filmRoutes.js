import express from 'express'
import { createFilm, getFilmById, getAllFilms, updateFilm, getFilmByTitle, getFilmByReleaseDate, getFilmByReleaseDateByYear, getFilmByRating, getFilmByGenre } from '../controllers/filmController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin.js'

const filmRoute = express.Router()

filmRoute.route('/')
  .post(authValidator, isAdmin, createFilm)
  .get(getAllFilms)
filmRoute.route('/:filmId')
  .get(getFilmById)
  .put(authValidator, isAdmin, updateFilm)
filmRoute.route('/titles/:name')
  .get(getFilmByTitle)
filmRoute.route('/dates/:date')
  .get(getFilmByReleaseDate)
filmRoute.route('/datesByYears/:date')
  .get(getFilmByReleaseDateByYear)
filmRoute.route('/ratings/:rating')
  .get(getFilmByRating)
filmRoute.route('/genres/:genre')
  .get(getFilmByGenre)

export default filmRoute
