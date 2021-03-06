import React from 'react';
import styled, {css} from 'styled-components';

import screen from 'resources/theme/Screen';

interface Props {
    className?: string,
    onChange: any,
    onKeyDown: any
    value: string
}

interface State {}

const Search = (props: Props, state: State) => {
    const { className, onChange, onKeyDown, value} = props;

    return(
        <SearchRoot className={className}>
            <Icon className="icon-search-24px"></Icon>
            <Input type="text" placeholder="搜尋" onChange={onChange} onKeyDown={onKeyDown} value={value}/>
        </SearchRoot>
    )
}

export default Search;

const SearchRoot = styled.div`
    display: flex;
    width: 290px;
    align-items: center;
    border-radius: 8px;
    background-color: #ddd;
    padding: 12px 20px;

    @media ${screen.sm} {
        width: 100%
    }
`;

const Icon = styled.span`
    font-size: 21px;
    color: #333;
`;

const Input = styled.input`
    font-family: 'Helvetica Neue','Microsoft JhengHei',sans-serif;
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    margin-left: 12px;
    flex: 1;
    font-weight: bold;

    &::-webkit-input-placeholder{
        color: #A3A3A3;
    }

    &:-moz-placeholder{
        color: #A3A3A3;
    }

    &::-moz-placeholder{
        color: #A3A3A3;
    }

    &input:-ms-input-placeholder{
        color: #A3A3A3;
    }
`;