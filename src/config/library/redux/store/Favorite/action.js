export const Types = {
    GET_FAVORITE_REQUEST: 'favorite/get_favorite_request',
    GET_FAVORITE_SUCCESS: 'favorite/get_favorite_success',

    REMOVE_FAVORITE_REQUEST: 'favorite/remove_favorite_request',

    ISLOADING: 'favorite/is_loading',
}

export const getFavoriteRequest = () => ({
    type: Types.GET_FAVORITE_REQUEST
})

export const getFavoriteSuccess = (list) => ({
    type: Types.GET_FAVORITE_SUCCESS,
    payload: {
        list
    }
})

export const removeFavoriteRequest = id => ({
    type: Types.REMOVE_FAVORITE_REQUEST,
    payload: {
        id
    }
})

export const IsLoading = (Switch) => ({
    type: Types.ISLOADING,
    payload: {
        Switch
    }
})