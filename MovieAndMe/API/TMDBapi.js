const API_TOKEN = "b808ddf1868854eebb63c852621975d8"

export function getFilmsFromApiWithSearchedText(text){
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query="+text
    return fetch(url)
    .then((Response) => Response.json())
    .catch((error) => console.log(error))
}