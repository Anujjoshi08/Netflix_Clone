import axios from "axios";

const API_KEY = "512533bc8318338e2c1b6f9cd805abcf";
const client = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
});

const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return client.get(endpoints[param] ?? "/trending/all/week");
};