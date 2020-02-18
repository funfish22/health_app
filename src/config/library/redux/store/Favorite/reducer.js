import { Types } from './action'

const initState = {
    list: [],
    isLoading: false
}


const Favorite = (state = initState, action) => {
    switch(action.type){
        case Types.GET_FAVORITE_SUCCESS:
            return {
                ...state,
                list: [...action.payload.list]
            }

        case Types.ISLOADING:
            return {
                ...state,
                isLoading: action.payload.Switch
            }

        default:
            return state;
    }
}

export default Favorite;