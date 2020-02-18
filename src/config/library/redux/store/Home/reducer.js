import { Types } from './action'

const initState = {
    list: [],
    page: 1,
    isLoading: false,
    search: ''
}


const Home = (state = initState, action) => {
    switch(action.type){
        case Types.GET_MASK_SUCCESS :
            return {
                ...state,
                list: [...state.list, ...action.payload.list],
                isLoading: false
            }

        case Types.CREATE_SEARCH :
            return {
                ...state,
                search: action.payload.search
            }

        case Types.ISLOADING :
            return {
                ...state,
                isLoading: action.payload.Switch
            }

        case Types.ENTER_MASK :
            return {
                ...state,
                list: [],
                page: 1
            }

        case Types.CHANGE_PAGE:
            return {
                ...state,
                page: action.payload.page
            }

        default:
            return state;
    }
}

export default Home;