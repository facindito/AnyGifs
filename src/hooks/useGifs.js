
import {useContext,useEffect, useState} from 'react'
import getGifs from '../services/getGifts'
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = { keyword: 'anime'}){
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)

 

  useEffect(function(){
    setLoading(true)
    //Recuperamos la keyword del localstorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')
    getGifs({keyword: keywordToUse})
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos La keyword en el localstorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])

  return {loading, gifs}
}
