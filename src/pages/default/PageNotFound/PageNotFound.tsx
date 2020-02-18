import React from 'react';
import styled from 'styled-components';

const PageNotFound = () => {
    return(
        <PageNotFoundRoot>Page Not Found</PageNotFoundRoot>
    )
}

export default PageNotFound;

const PageNotFoundRoot = styled.div`
    position: fixed;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #38B2A9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`