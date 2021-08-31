import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'

const POPULAR_GIFS = [ "Dragon ball z", "Naruto", "One Piece", "Death Note"]

export default function Home () {
  const[keyword, setKeyword]= useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()
  
  const handleSubmit = evt => {
    //No olvidar
    evt.preventDefault()
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}/>
      </form>
      <h3 className="App-title">Ultima busqueda</h3>
        <ListOfGifs gifs={gifs}/>
      <h3 className="App-title">Los gifs mas populares</h3>
        <ul>
          {POPULAR_GIFS.map((popularGif)=>(
              <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>
                  Gifs de {popularGif}
                </Link>
              </li>
            ))}
        </ul>
    </>
  )
}