import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'resources/components/atoms/Card';
import Loading from 'resources/components/atoms/Loading';

import { getMaskRequest, IsLoading, createFavorite, changePage } from 'config/library/redux/store/Home/action';

interface Props {}

interface State {
    Home: {
        list: Array<any>,
        page: number,
        isLoading: boolean,
        search: String,
    },
    Favorite: {
        list: Array<any>
    }
}

const Home = (props: Props, state: State) => {
    const dispatch = useDispatch()

    const list = useSelector((state: State) => state.Home.list);
    const isLoading = useSelector((state: State) => state.Home.isLoading);
    const searchTitle = useSelector((state: State) => state.Home.search);
    const pageNumber = useSelector((state: State) => state.Home.page);

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', someFunction)
            // window.removeEventListener('touchend', someFunction)
        }
    });

    const handleFavorite = (info: any) => {
        dispatch(IsLoading(true))
        dispatch(createFavorite(info))
    }

    const someFunction = () => {
        let scrollTop = window.scrollY;
        let clientHeight = window.innerHeight;
        let scrollHeight = document.body.scrollHeight;
        let body = document.body;
        if (isLoading) return

        console.log('isLoading', isLoading)
        console.log('scrollTop + clientHeight', scrollTop + clientHeight)
        console.log('scrollHeight', scrollHeight)
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            body.style.overflow = 'hidden'
            const title = searchTitle
            dispatch(IsLoading(true))

            const page = pageNumber + 1
            dispatch(changePage(page))
            dispatch(getMaskRequest({ title, page }))
        }
    }

    window.addEventListener('scroll', someFunction);
    // window.addEventListener('touchend', someFunction)

    return(
        <CardContainer>
            <CardRoot>
                {
                    list && (
                        list.map(row => {
                            return (
                                <Card key={row.full_name} info={row} onFavorite={() => handleFavorite(row)} />
                            )
                        })
                    )
                }
            </CardRoot>
            {isLoading === true && (<Loading/>)} 
        </CardContainer>
    )
}

export default Home;

const CardContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardRoot = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;