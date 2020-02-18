import axios from 'axios';

export const getFavoriteApi = () => {
    return axios.get('https://thawing-inlet-37368.herokuapp.com/api/lists')
};

export const removeFavoriteApi = id => {
    return axios.delete(`https://thawing-inlet-37368.herokuapp.com/api/lists/delete/${id}`)
}