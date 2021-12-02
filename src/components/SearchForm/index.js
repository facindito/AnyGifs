import React from "react";
import { useLocation } from 'wouter'
import './style.css'
import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {

  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation()

  const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

  const handleSubmit = evt => {
    //No olvidar
    evt.preventDefault()
    //Navegar a otra ruta
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = evt => {
    updateKeyword(evt.target.value)
  }

  const handleChangeRating = evt => {
    updateRating()
  }

  return (

    <form onSubmit={handleSubmit} className="search">
      <select className="rating" onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <div className="search-bar">
        <button className="search-btn">
          <i class="fas fa-search" />
        </button>
        <input
          className="search-input"
          placeholder="Search a gif here..."
          onChange={handleChange}
          type='text'
          value={keyword}
        />
      </div>
    </form>
  )
}

export default React.memo(SearchForm)
