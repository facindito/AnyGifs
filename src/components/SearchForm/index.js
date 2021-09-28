import React, {useState} from "react";
import './style.css'

 function SearchForm({ onSubmit }){
  const[keyword, setKeyword]= useState('')

  const handleSubmit = evt => {
    //No olvidar
    evt.preventDefault()
    //navegar a otra ruta
    onSubmit({keyword})
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return(
    <form onSubmit={handleSubmit} className="search">
      <button className="search-btn">Buscar</button>
      <input className="search-input" placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}/>
    </form>
  )

}

export default React.memo(SearchForm)
