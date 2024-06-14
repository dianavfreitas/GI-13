const axios = require("axios");

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzM4ZDc5OGU2MTQ1NjQ5MTJjN2RjZTZlN2RmN2E5MyIsInN1YiI6IjY2NmIwNGFiNThjYjkxYzY3ZGE3NGQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dbIFZkhBLQcNEp7Kj8LHR4MrV0wajYhJbfBfPmKSM-I'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

async function fetchMovies(){
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1')

        if(response.data.products.length > 0){
            return response.data.products[0];
        }else{
            return null;
        }
    } catch(error){
        console.error("Error fetching Movie:", error);
        return null;
    }
}

module.exports = {fetchMovies};
