const mainDiv = document.querySelector('.main')

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

const getData = () => {
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
}