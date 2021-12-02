
import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifts'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)
  //Recuperamos la keyword del localstorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos La keyword en el localstorage
        localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword, keywordToUse, rating, setGifs])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, rating, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, rating, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
