import Film from '../models/Film.js'

// create user
const createFilm = async (req, res) => {
  try {
    const newFilm = await Film.create(req.body)
    res.status(201).json({
      msg: 'Film created successfully',
      film: newFilm
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error when creating the film',
      error
    })
  }
}
// get user by id
const getFilmById = async (req, res) => {
  try {
    const filmId = await Film.findById(req.params.filmId)
    res.json({
      msg: 'Film retrieved successfully',
      film: filmId
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding film',
      error
    })
  }
}
// get all films
const getAllFilms = async (req, res) => {
  try {
    const allFilms = await Film.find()
    res.status(200).json({
      message: 'All films found successfully',
      films: allFilms
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding film',
      error
    })
  }
}
// ger film by title
const getFilmByTitle = async (req, res) => {
  try {
    const getFilmByTitle = await Film.find({ name: req.params.name })
    if (getFilmByTitle) {
      return res.status(200).json({
        msg: 'Film found successfully',
        film: getFilmByTitle
      })
    } else {
      return res.status(404).json({
        msg: 'Film not found for name ' + req.params.name
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding movie',
      error
    })
  }
}
// get user by releaseDate
const getFilmByReleaseDate = async (req, res) => {
  try {
    const getFilmByReleaseDate = await Film.find({ releaseDate: req.params.date })
    if (getFilmByReleaseDate) {
      return res.status(200).json({
        msg: 'Film found successfully',
        film: getFilmByReleaseDate
      })
    } else {
      return res.status(404).json({
        msg: 'Film not found for year ' + req.params.year
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding movie',
      error
    })
  }
}
// get user by releaseDateYear
const getFilmByReleaseDateByYear = async (req, res) => {
  try {
    const getFilmByReleaseDateByYear = await Film.find({ releaseDateYear: req.params.date })
    if (getFilmByReleaseDateByYear) {
      return res.status(200).json({
        msg: 'Film found successfully',
        film: getFilmByReleaseDateByYear
      })
    } else {
      return res.status(404).json({
        msg: 'Film not found for year ' + req.params.year
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding movie',
      error
    })
  }
}
// get user by rating
const getFilmByRating = async (req, res) => {
  try {
    const getFilmByRating = await Film.find({ rating: req.params.rating })
    if (getFilmByRating) {
      return res.status(200).json({
        msg: 'Film found successfully',
        film: getFilmByRating
      })
    } else {
      return res.status(404).json({
        msg: 'Film not found for rating ' + req.params.rating
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding movie',
      error
    })
  }
}
// get user by genre
const getFilmByGenre = async (req, res) => {
  try {
    const getFilmByGenre = await Film.find({ genre: req.params.genre })
    if (getFilmByGenre) {
      return res.status(200).json({
        msg: 'Film found successfully',
        film: getFilmByGenre
      })
    } else {
      return res.status(404).json({
        msg: 'Film not found for genre ' + req.params.genre
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding movie',
      error
    })
  }
}
// update film
const updateFilm = async (req, res) => {
  try {
    const { filmId } = req.params
    const updateFilm = await Film.updateOne({
      _id: filmId
    },
    req.body
    )
    res.json(updateFilm)
  } catch (error) {
    res.status(500).json({
      msg: 'Error updating the film',
      error
    })
  }
}

export { createFilm, getFilmById, getAllFilms, updateFilm, getFilmByTitle, getFilmByReleaseDate, getFilmByReleaseDateByYear, getFilmByRating, getFilmByGenre }
