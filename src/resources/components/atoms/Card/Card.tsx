import React from 'react';
import styled, {css} from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import screen from 'resources/theme/Screen';

const source =  {
    "href": "first",
    "full_name": "test",
    "license": null
} 

interface Props {
    info: any,
    onFavorite?: any,
    onUnFavorite?: any
}

interface State {
    Favorite: {
        list: Array<any>
    }
}

const Card = (props: Props, state: State) => {
    const { info, onFavorite, onUnFavorite } = props;

    const FavoriteList = useSelector((state: State) => state.Favorite.list);

    const isCurrent = FavoriteList.find(row => { if (row.data.full_name === info.full_name) return true})

    return(
        <CardRoot>
            <CardHref>
                <CardTitleRoot href={info.html_url} target="_black">
                    <CardTitle>{info.full_name}</CardTitle>
                    <CardLanguage>{info.language}</CardLanguage>
                    <CardStar>
                        <i className="icon-star-24px"/>
                        {info.watchers}
                    </CardStar>
                    {
                        info.license !== null && (
                            <CardMIT>{info.license.spdx_id}</CardMIT>
                        )
                    }
                </CardTitleRoot>
                <CardInfoRoot>
                    <CardDes>{info.description}</CardDes>
                    <CardFooter>
                        <CardLink href={info.html_url} target="_black">前往github頁面</CardLink>
                        {!isCurrent && (
                            <CardFavorite onClick={onFavorite}>加入收藏</CardFavorite>
                        )}
                        {onUnFavorite && (
                            <CardFavorite onClick={onUnFavorite}>取消收藏</CardFavorite>
                        )}
                    </CardFooter>
                    
                </CardInfoRoot>
            </CardHref>
        </CardRoot>
    )
}

Card.defaultProps = {
    info: source
}

export default Card;

const CardRoot = styled.li`
    width: calc(50% - 30px);
    margin: 20px 15px;
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    transition: .5s;

    &:hover{
        box-shadow: 0 0 10px rgba(0,0,0,.3);
    }

    @media ${screen.sm} {
        width: 100%;
        margin: 10px 15px;
    }
`;

const CardHref = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const CardTitleRoot = styled.a`
    padding: 20px;
    background-color: #38B2A9;
    color: #fff;
    word-break: break-all;

    @media ${screen.sm} {
        padding: 15px;
    }
`;

const CardTitle = styled.p`
    font-size: 24px;
    margin-bottom: 5px;

    @media ${screen.lg} {
        font-size: 18px;
    }
`;

const CardLanguage = styled.p`
    font-size: 20px;
    min-height: 30px;
    margin-bottom: 5px;

    @media ${screen.lg} {
        font-size: 15px;
    }
`;

const CardStar = styled.span`
    color: #f1e05a;

    @media ${screen.lg} {
        font-size: 12px;
    }
`;

const CardMIT = styled.span`
    display: inline-block;
    margin-left: 10px;

    @media ${screen.lg} {
        font-size: 12px;
    }
`;

const CardInfoRoot = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;

    @media ${screen.sm} {
        padding: 15px;
    }
`;

const CardDes = styled.p`
    margin-bottom: 15px;

    @media ${screen.lg} {
        margin-bottom: 10px;
        font-size: 14px;
    }
`;

const CardFavorite = styled.button`
    background-color: #38B2A9;
    color: #fff;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: .5s;
    font-weight: bold;

    @media ${screen.lg} {
        font-size: 12px;
    }

    @media ${screen.sm} {
        padding: 8px 10px;
    }

    &:hover{
        background-color: #2d958e;
    }
`;

const CardLink = styled.a`
    margin-right: 8px;
    background-color: #38B2A9;
    color: #fff;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: .5s;
    font-weight: bold;

    @media ${screen.lg} {
        font-size: 12px;
    }

    @media ${screen.sm} {
        padding: 8px 10px;
    }

    &:hover{
        background-color: #2d958e;
    }
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
`;
