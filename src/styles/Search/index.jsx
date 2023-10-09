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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 600px;
        justify-content: flex-start;
        padding-left: 15px;
        min-height: 70px;
        border-radius: 35px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: 700px;
        justify-content: flex-start;
        padding-left: 20px;
        min-height: 80px;
        border-radius: 40px;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    max-width: 370px;
    display: flex;
    gap:10px;

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 30px;
    }
    
`

export const SearchBar = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    max-width: 330px;
    color : white;
    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 19px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 22px;
    }
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

    @media (min-width: 769px) and (max-width:1024px)
    {
        max-height: 500px;
        max-width: ${(props) => (props.isClosed ? "1290px" : "1100px")};
        padding-left: ${(props) => (props.isClosed ? "12px" : "20px")};
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        max-height: 500px;
        max-width: ${(props) => (props.isClosed ? "1290px" : "1100px")};
        padding-left: ${(props) => (props.isClosed ? "10px" : "12px")};
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-height: 630px;
        max-width: ${(props) => (props.isClosed ? "1290px" : "1100px")};
        padding-left: ${(props) => (props.isClosed ? "20px" : "20px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1475px")};
        max-height: 830px;
        padding-left: ${(props) => (props.isClosed ? "20px" : "20px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2135px")};
        max-height: 1300px;
        padding-left: ${(props) => (props.isClosed ? "35px" : "30px")};
        gap: 25px;
    }
`