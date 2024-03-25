import express from 'express'
import { createFilm, getFilmById, getAllFilms, updateFilm, getFilmByTitle, getFilmByReleaseDate, getFilmByReleaseDateByYear, getFilmByRating, getFilmByGenre } from '../controllers/filmController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin.js'

const filmRoute = express.Router()

filmRoute.route('/')
  .post(createFilm)
  .get(getAllFilms)
filmRoute.route('/:filmId')
  .get(authValidator, getFilmById)
  .put(authValidator, isAdmin, updateFilm)
filmRoute.route('/titles/:name')
  .get(authValidator, getFilmByTitle)
filmRoute.route('/dates/:date')
  .get(authValidator, getFilmByReleaseDate)
filmRoute.route('/datesByYears/:date')
  .get(authValidator, getFilmByReleaseDateByYear)
filmRoute.route('/ratings/:rating')
  .get(authValidator, getFilmByRating)
filmRoute.route('/genres/:genre')
  .get(authValidator, getFilmByGenre)

export default filmRoute
