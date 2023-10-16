import styled from 'styled-components'


export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #121212;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;
    padding-inline: 30px;

    @media (max-width: 768px)
    {
       padding-inline: 15px;
    }
`

export const PlaylistsWrapper = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;

    @media (max-width: 768px)
    {
       padding-bottom: 50px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        padding-top: 15px;
    }
    @media (min-width: 1921px) and (max-width: 2560px)
    {
        padding-top: 15px;
    }   
`

export const PlaylistInfoWrapper = styled.div`
     width: 100%;
     display: flex;
     gap:20px;

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        gap: 35px;
    } 
`
export const PlaylistInfoLeft = styled.div`

`

export const PlaylistInfoRight = styled.div`
    width:100%;
    max-width: ${(props) => (props.isClosed ? "1000px" : "420px")};
   
    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1150px" : "500px")};
        gap: 25px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "1200px" : "740px")};
        gap: 35px;
    }
`

export const PlaylistImage = styled.img`
    width: 250px;
    height: 200px;

    @media (max-width: 768px)
    {
        width:150px;
        height: 150px;

    }

    @media (min-width: 769px) and (max-width:1024px)
    {
        width: 190px;
        height: 160px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width: 310px;
        height: 260px;
    }
    @media (min-width: 1921px) and (max-width: 2560px)
    {
        width: 320px;
        height: 300px;
    }
`

export const PlayListNameDesc = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */

    @media (max-width: 768px)
    {
        min-height: 150px;
    }

    @media (min-width: 769px) and (max-width:1024px)
    {
        align-items: flex-start;
        min-height: 150px;
    }
    
`

export const PlayListName = styled.h1`
    color : white;
    word-wrap: break-word;
    font-size: 85px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 375px)
    {
        font-size: 23px;

    }

    @media (min-width: 376px) and (max-width: 460px)
    {
        font-size: 35px;

    }

    @media (min-width: 461px) and (max-width: 768px)
    {
        font-size: 45px;

    }

    @media (min-width: 769px) and (max-width:1024px)
    {
        font-size: 55px;
    }

`
export const PlaylistDescWrapper = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
`

export const PlaylistDesc = styled.h4`
    color : #dbdada;
    font-size: 21px;

    @media (max-width: 768px)
    {
        font-size: 15px;

    }

`

export const SearchAndAdd = styled.div`
    width:100%;
    display : flex;
    flex-direction : column;
    justify-content: center;
    position: relative;

    @media (min-width: 1441px) and (max-width:1920px)
    {
        min-height: 65px;
        padding-top: 13px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        min-height: 80px;
        padding-top: 15px;
    }
`


export const SearchWrapper = styled.div`
`
export const AddContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 62px;
    left: 0px;
    padding-inline: 30px;
    z-index: 3;

    @media (max-width: 768px)
    {
        top: 40px;
    }

    @media (min-width: 769px) and (max-width:1024px)
    {
        padding-inline: 18px;
    }

    @media (min-width: 1024px) and (max-width:1366px)
    {
        padding-inline: 22px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        padding-inline: 22px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        top: 74px; 
    }

     @media (min-width: 1921px) and (max-width: 2560px)
    {
        top: 97px;
        left: 3px;
    }
`

export const AddWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-height: 410px;
    overflow-y: auto;
    padding-right: 15px;
    background-color: black;
    padding-top: 10px;
    padding-left: 15px;

  

    @media (min-width: 769px) and (max-width:1024px)
    {
        max-height: 360px; 
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        max-height: 360px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-height: 450px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-height: 515px;
    }

     @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-height: 600px;
        
    }
`
export const SearchBarWrapper = styled.div`
    width: 100%;
    background-color: #2A2A2A;
    border-radius: 30px;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;

    &:active{
        border: 2px solid white;
    }

    &:hover{
        background-color: #3d3d3d;
    
    }

    @media (max-width: 768px)
    {
        min-height: 37px; 
    }
    @media (min-width: 1441px) and (max-width:1920px)
    {

        min-height: 60px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        min-height: 80px;
        border-radius: 40px;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    gap:10px;
    align-items: center;
`

export const SearchBar = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    color : white;

    @media (max-width: 768px)
    {
        font-size: 12px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 18px;
    }
    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 23px;
    }
`

export const SongCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`
export const SongDetails = styled.div`
    display: flex;
    gap : 15px;
    align-items: center;
`

export const SongImg = styled.img`
    width:40px;
    height: 40px;

    @media (max-width: 768px)
    {
        height: 35px; 
        width: 35px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width:45px;
        height: 45px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width: 50px;
        height: 50px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        width: 65px;
        height: 65px;
    }
`

export const ArtistWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const SongName = styled.h2`
    color : white;
    font-size: 18px;

    @media (max-width: 768px)
    {
        font-size: 14px;
    }

`

export const ArtistName = styled.h3`
    color : #dbdada;
    font-size: 12px;

    @media (max-width: 768px)
    {
        font-size: 10px;
    }
`

export const AddSongs = styled.div`
    color : white;
    cursor: pointer;
    padding: 5px;
    font-size: 26px;
    display: flex;
    align-items : center;
    justify-content: center;
    gap: 5px;

    @media (max-width: 768px)
    {
        font-size: 20px;
    }


`
export const AddedSongs = styled.div`
    color : white;
    font-size: ${(props) => (props.isClosed ? "22px" : "16px")};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    @media (max-width: 768px)
    {
        font-size: ${(props) => (props.isClosed ? "17px" : "16px")};
    }

     @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: ${(props) => (props.isClosed ? "22px" : "16px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: ${(props) => (props.isClosed ? "22px" : "16px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: ${(props) => (props.isClosed ? "27px" : "16px")};
    }

`
export const ShuffleAddedWrapper = styled.div`
     width: 100%;
     height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

`

export const ShuffleWrapper = styled.div`
    width: 100%;
    min-height: 40px;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 5px;
`
export const Shuffle = styled.h3`
    color : white;
    gap: 15px;
    font-size: 22px;

    @media (max-width: 768px)
    {
        font-size: 17px;
    }
`
export const AddedSongContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y:scroll;
`

export const AdddedSongsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    flex-direction : column;
    gap: 15px;
    padding-right: 15px;
    position: absolute;
`