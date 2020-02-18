import React, { useState } from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import Router from './Router';
import Navbar from 'resources/components/atoms/Navbar';
import Search from 'resources/components/atoms/Search';
import Button from 'resources/components/atoms/Button';

import screen from 'resources/theme/Screen';

import { getMaskRequest, IsLoading, enterMask, createSearch, changePage } from 'config/library/redux/store/Home/action';
import { getFavoriteRequest } from 'config/library/redux/store/Favorite/action';

interface Props { }

interface State { }

interface MyStyle {
    iscurrent: any
}

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
        const title = SearchTitle

        if (e.keyCode === 13 || e.button === 0) {
            const page = 1

            if (title.trim() === '') {
                alert('請輸入文字')
                return
            }

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
            <SearchRoot iscurrent={!active}>
                <Search onChange={handleSearch} value={SearchTitle} onKeyDown={handleEnter} />
                <Button onClick={handleEnter}>搜尋</Button>
            </SearchRoot>
            <Router/>
        </HashRouter>
    )
}

export default App;

const SearchRoot = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px auto 20px auto;
    max-width: calc(100% - 30px);

    @media ${screen.sm} {
        margin: 30px auto 15px auto;
        flex-direction: column;
    }


    ${(props: MyStyle) => props.iscurrent && css`
        display: none
    `};
`;