import React from 'react';
import styled from 'styled-components';

import screen from 'resources/theme/Screen';

interface Props {
    children: string,
    className?: string,
    onClick: any
}

interface State {}

const Button = (props: Props, state: State) => {
    const { className, children, onClick} = props

    return(
        <ButtonRoot className={className} onClick={onClick}>{children}</ButtonRoot>
    )
}

export default Button;

const ButtonRoot = styled.div`
    display: inline-block;
    border: 1px solid #38B2A9;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: .5s;
    font-weight: bold;
    color: #38B2A9;
    margin: 0 5px;
    text-align: center;

    @media ${screen.sm} {
        margin: 5px 0;
    }

    &:hover{
        background-color: #2d958e;
        color: #fff;
    }
`;