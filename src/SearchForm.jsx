import React from 'react'
import './SearchForm.css'

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-input" type="text" placeholder="Enter city name" />
      <button className="search-button" type="submit">Search</button>
    </form>
  )
}

export default SearchForm
