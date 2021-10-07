import React, { useCallback } from 'react'
import {useLocation } from 'wouter'
import { useGifs } from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

export default function Home () {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation()
  // eslint-disable-next-line no-unused-vars
  const {loading, gifs} = useGifs()
  
  const handlerSubmit = useCallback(({keyword}) => {
    //Navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  },[pushLocation])

  return(
    <>
      <Helmet>
        <title> Home | AnyGifs</title>
      </Helmet>
     <header className="o-header">
       <SearchForm onSubmit={handlerSubmit}/>
     </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs}/>
          </div>
          <div className="App-category">
            <TrendingSearches/>
          </div>
        </div>
      </div>
    </>
  )
}