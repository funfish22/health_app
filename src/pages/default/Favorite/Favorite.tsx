import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Card from 'resources/components/atoms/Card';
import Loading from 'resources/components/atoms/Loading';

import { getFavoriteRequest, removeFavoriteRequest, IsLoading } from 'config/library/redux/store/Favorite/action';

interface Props { }

interface State {
    Favorite: {
        list: Array<any>,
        isLoading: boolean
    }
}

const Favorite = (props: Props, state: State) =>{
    const dispatch = useDispatch();

    const list = useSelector((state: State) => state.Favorite.list);
    const isLoading = useSelector((state: State) => state.Favorite.isLoading);

    useEffect(() => {
        dispatch(IsLoading(true))
        dispatch(getFavoriteRequest())
    },[]);

    const handleUnFavorite = (id: any) => {
        dispatch(IsLoading(true))
        dispatch(removeFavoriteRequest(id))
    }

    return(
        <CardContainer>
            <CardRoot>
                {
                    list && (
                        <>
                            {
                                list.map(row => (
                                    <Card key={row._id} info={row.data} onUnFavorite={() => handleUnFavorite(row._id)}/>
                                ))
                            }
                        </>
                    )
                }
            </CardRoot>
            {isLoading === true && (<Loading />)} 
        </CardContainer>
    )
}

export default Favorite;

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