const axios = require("axios");

const API_KEY = '3338d798e614564912c7dce6e7df7a93'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies(movieName) {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: movieName,
                include_adult: false,
                language: 'en-US',
                page: 1
            }
        });

        if (response.data.results.length > 0) {
            return response.data.results[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching Movie:", error);
        return null;
    }
}

module.exports = {fetchMovies};
