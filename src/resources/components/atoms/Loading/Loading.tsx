import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {}

interface State {}

const Loading = (props: Props, state: State) => {
    return(
        <LoadRoot>
            <LoadContainer>
                <Speeding/>
            </LoadContainer>
        </LoadRoot>
    )
}

export default Loading;

const rotate = keyframes`
    100%{ 
        transform: rotate(360deg); transform: rotate(360deg)
    };
`;

const LoadRoot = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.2);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadContainer = styled.div`
    width: 100%;
	height: 50px;
	text-align: center;
`;

const Speeding = styled.div`
    width: 50px;
	height: 50px;
	margin: 0 auto;
	border: 3px solid #38B2A9;
	border-radius: 50%;
	border-left-color: transparent;
	border-right-color: transparent;
	animation: ${rotate} 500ms infinite linear;
`;