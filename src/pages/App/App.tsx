import React, { useState } from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Router from './Router';
import Navbar from 'resources/components/atoms/Navbar';
import Search from 'resources/components/atoms/Search';

import { getMaskRequest, IsLoading, enterMask, createSearch, changePage } from 'config/library/redux/store/Home/action';
import { getFavoriteRequest } from 'config/library/redux/store/Favorite/action';

interface Props { }

interface State {}

const App = (props: Props, state: State) => {
    const [SearchTitle, setSearch] = useState('');
    const [active, setActive] = useState(true);
    const dispatch = useDispatch()

    const handleActive = (type: any) => {
        setActive(type)
    }

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }

    const handleEnter = (e: any) => {
        const title = e.target.value

        if (e.keyCode === 13) {
            const page = 1

            dispatch(IsLoading(true))
            dispatch(enterMask())
            dispatch(createSearch(title))
            dispatch(changePage(page))
            dispatch(getMaskRequest({ title, page }))
            dispatch(getFavoriteRequest())
        }
    }

    return(
        <HashRouter>
            <Navbar onClick={handleActive} iscurrent={active}/>
            <Search onChange={handleSearch} value={SearchTitle} onKeyDown={handleEnter} iscurrent={active}/>
            <Router/>
        </HashRouter>
    )
}

export default App;
