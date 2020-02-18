import axios from 'axios';

export const getMaskApi = ({title, page}) => {
    return axios.get(`/search/repositories?q=${title}&per_page=10&page=${page}`)
};

export const createFavorite = (info) => {
    return axios.post('https://morning-atoll-00255.herokuapp.com/api/lists/add', { data: info})
}