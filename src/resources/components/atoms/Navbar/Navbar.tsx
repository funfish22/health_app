import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
    className?: string,
    onClick: Function,
    iscurrent: any
}

interface State {}

interface MyStyle {
    iscurrent: any
}

const Navbar = (props: Props, state: State) => {
    const { className, onClick, iscurrent} = props

    return(
        <NavbarRoot className={className}>
            <NavbarList>
                <NavbarLink to="/" onClick={() => onClick(true)} iscurrent={`${iscurrent}`}>搜尋</NavbarLink>
            </NavbarList>
            <NavbarList>
                <NavbarLink to="/Favorite" onClick={() => onClick(false)} iscurrent={`${!iscurrent}`}>收藏</NavbarLink>
            </NavbarList>
        </NavbarRoot>
    )
}

export default Navbar;

const NavbarRoot = styled.ul`
    padding: 20px;
    background-color: #38B2A9;
    display: flex;
    justify-content: center;
`;

const NavbarList = styled.li`

`;

const NavbarLink = styled(Link)`
    padding: 0 5px;
    margin: 0 10px;
    color: #fff;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        width: 0%;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%);
        height: 2px;
        background-color: #fff;
        transition: .5s;
    }

    &:hover{
        &:after{
            width: 100%;
        }
    }

    ${(props: MyStyle) => props.iscurrent === 'true' && css`
        &:after{
            width: 100%;
        }
    `};
`;