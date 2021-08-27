const apiKey = 'MJKVTBd7rHT8w7k7Z4MLmfoEaQcKzZe3'


export default function getGifs ({keyword = 'anime'} = {}){
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=r&lang=en`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if(Array.isArray(data)){
        const gifs = data.map(image => {
          const {images, title, id} = image
          const {url} = images.downsized_medium
          return {title, id, url}
        })
        return gifs
      }
      
    })
}