import React, {useCallback, useRef,useEffect} from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const {loading, gifs, setPage} = useGifs({keyword})
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false})

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage( prevPage => prevPage + 1)
  ), [])


  useEffect(function(){
    if(isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={title}/>
        </Helmet>
        <div className="App-wrapper">
          <h3 className="App-title">
            {decodeURI(keyword)}
          </h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </div>
      </>
    }
  </>
}