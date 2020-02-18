export const Types = {
    GET_MASK_REQUEST: 'home/get_mask_request',
    GET_MASK_SUCCESS: 'home/get_mask_success',

    ISLOADING: 'home/is_loading',
    ENTER_MASK: 'home/enter_mask',

    CREATE_FAVORITE: 'home/create_favorite',

    CHANGE_PAGE: 'home/change_page',

    CREATE_SEARCH: 'home/create_search',
}

export const getMaskRequest = ({ title, page}) => ({
    type: Types.GET_MASK_REQUEST,
    payload: {
        title,
        page
    }
})

export const getMaskSuccess = ({list}) => ({
    type: Types.GET_MASK_SUCCESS,
    payload: {
        list
    }
})

export const IsLoading = (Switch) => ({
    type: Types.ISLOADING,
    payload: {
        Switch
    }
})

export const enterMask = () => ({
    type: Types.ENTER_MASK
})

export const changePage = (page) => ({
    type: Types.CHANGE_PAGE,
    payload: {
        page
    }
})

export const createFavorite = (info) => ({
    type: Types.CREATE_FAVORITE,
    payload: {
        info
    }
})

export const createSearch = (search) => ({
    type: Types.CREATE_SEARCH,
    payload: {
        search
    }
})