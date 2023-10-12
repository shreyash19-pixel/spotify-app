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

    @media (max-width:768px)
    {
       max-width: 350px;
       padding-left: 10px;
       min-height: 40px;
    
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
        min-height: 68px;
        border-radius: 40px;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    max-width: 370px;
    display: flex;
    align-items: center;
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


    @media (max-width:768px)
    {
      font-size: 12px;
    
    }
    
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
    max-height: 80vh;
    overflow-y: auto;
    display : flex;
    gap: 15px;
    flex-wrap : wrap;
    padding-left: 9px;

    @media (max-width:768px)
    {
      padding-left: 35px;
        max-width: 730px;
        max-height: 325px;
    }

    @media (min-width: 769px) and (max-width:1024px)
    {
        padding-left: ${(props) => (props.isClosed ? "12px" : "20px")};
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        padding-left: ${(props) => (props.isClosed ? "10px" : "12px")};
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        padding-left: ${(props) => (props.isClosed ? "20px" : "20px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        padding-left: ${(props) => (props.isClosed ? "20px" : "20px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        padding-left: ${(props) => (props.isClosed ? "35px" : "30px")};
        gap: 25px;
    }

    @media (min-width: 2561px)
    {
        max-height: 90vh;
    }
`