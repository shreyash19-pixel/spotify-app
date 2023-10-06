import styled from 'styled-components'


export const HeroWrapper = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "1040px")};
    background-color: #121212;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1320px" : "1090px")};
    }
    
`

export const PlaylistsWrapper = styled.div`
    width:100%;
    max-width: ${(props) => (props.isClosed ? "1200px" : "986px")};
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1250px" : "1020px")};
    }
`

export const PlaylistInfoWrapper = styled.div`
     width: 100%;
     max-width: ${(props) => (props.isClosed ? "1250px" : "986px")};
     min-height: 40px;
     display: flex;
     gap:15px;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1250px" : "1020px")};
    }
`
export const PlaylistInfoLeft = styled.div`

`

export const PlaylistInfoRight = styled.div`

`

export const PlaylistImage = styled.img`
    width: 250px;
    height: 200px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width: 270px;
        height: 220px;
    }
`

export const PlayListNameDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    @media (min-width: 1367px) and (max-width:1440px)
    {
        min-height: 220px;
    }
`

export const PlayListName = styled.h1`
    color : white;
    font-size: 85px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 90px;
    }
`
export const PlaylistDesc = styled.h4`
    color : #dbdada;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 22px;
    }
`

export const SearchAndAdd = styled.div`
    width:100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "986px")};
    display : flex;
    flex-direction : column;
    justify-content: center;
    position: relative;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1320px" : "1090px")};
    }
`


export const SearchWrapper = styled.div`
`
export const AddWrapper = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1170px" : "946px")};
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-height: 410px;
    overflow-y: auto;
    padding-right: 15px;
    position: absolute;
    top: 62px;
    left: 18px;
    background-color: black;
    padding-top: 10px;
    padding-left: 15px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1230px" : "1003px")};
        max-height: 450px;
    }
`
export const SearchBarWrapper = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "986px")};
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

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1290px" : "1090px")};
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    max-width: 950px;
    display: flex;
    gap:10px;
`

export const SearchBar = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    max-width: 950px;
    color : white;
`

export const SongCard = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "986px")};
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

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width:45px;
    height: 45px;
    }
`

export const ArtistWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const SongName = styled.h2`
    color : white;
    font-size: 18px;

    
    @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 20px;
    }
`

export const ArtistName = styled.h3`
    color : #dbdada;
    font-size: 12px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 14px;
    }
`

export const AddSongs = styled.div`
    border : 1px solid white;
    color : white;
    cursor: pointer;
    border-radius: 30px;
    padding: 5px;
    font-size: 16px;
    width: 100%;
    max-width: 80px;
    display: flex;
    align-items : center;
    justify-content: center;
    gap: 5px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 18px;
       padding:7px;
       max-width: 85px;
    }

`
export const AddedSongs = styled.div`
    color : white;
    font-size: ${(props) => (props.isClosed ? "20px" : "16px")};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

     @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: ${(props) => (props.isClosed ? "23px" : "16px")};
    }
`
export const ShuffleAddedWrapper = styled.div`
     width: 100%;
    max-width:${(props) => (props.isClosed ? "1250px" : "986px")};
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1290px" : "1090px")};
    }

`

export const ShuffleWrapper = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "986px")};
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 5px;
    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1290px" : "1090px")};
    }
`
export const Shuffle = styled.h3`
    color : white;
    gap: 15px;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 22px;
    }

`

export const AdddedSongsWrapper = styled.div`
    width: 100%;
    max-width:${(props) => (props.isClosed ? "1250px" : "986px")};
    max-height: 180px;
    overflow-y: auto;
    display : flex;
    flex-direction : column;
    gap: 15px;
    padding-right: 15px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1290px" : "1090px")};
        max-height: 290px;
    }
`