import axios from 'axios';

export const getFavoriteApi = () => {
    return axios.get('https://morning-atoll-00255.herokuapp.com/api/lists')
};

export const removeFavoriteApi = id => {
    return axios.delete(`https://morning-atoll-00255.herokuapp.com/api/lists/delete/${id}`)
}