import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: #2A2A2A;
    border-radius: 30px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active{
        border: 2px solid white;
    }

    &:hover{
        background-color: #3d3d3d;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    max-width: 370px;
    display: flex;
    gap:10px;
`

export const SearchBar = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    max-width: 330px;
    color : white;
`

export const SearchedSongs = styled.div`
    padding-top: 15px;
    width: 100%;
    max-width: 1000px;
    max-height: 510px;
    overflow-y: auto;
    display : flex;
    gap: 15px;
    flex-wrap : wrap;
    padding-left: 9px;
`