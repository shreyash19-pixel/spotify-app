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

    @media (min-width: 1367px) and (max-width:1440px)
    {
       max-width: 550px;
       justify-content: flex-start;
       padding-left: 15px;
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
    max-width: ${(props) => (props.isClosed ? "1270px" : "1000px")};
    max-height: 510px;
    overflow-y: auto;
    display : flex;
    gap: 15px;
    flex-wrap : wrap;
    padding-left: 9px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-height: 630px;
        max-width: ${(props) => (props.isClosed ? "1290px" : "1100px")};
        padding-left: ${(props) => (props.isClosed ? "15px" : "20px")};
    }
`