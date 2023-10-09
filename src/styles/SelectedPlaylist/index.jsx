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
    padding-inline: 30px;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1320px" : "1090px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1495px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1690px" : "1410px")};
        padding-top: 15px;
    }

    
    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
        padding-top: 20px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1690px" : "1410px")};
        gap: 25px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
        gap: 35px;
    }
`
export const PlaylistInfoLeft = styled.div`

`

export const PlaylistInfoRight = styled.div`

@media (min-width: 769px) and (max-width:805px)
    {
        max-width: ${(props) => (props.isClosed ? "1250px" : "210px")};
    }

@media (min-width: 806px) and (max-width:900px)
    {
        max-width: ${(props) => (props.isClosed ? "1250px" : "270px")};
    }

@media (min-width: 901px) and (max-width:1024px)
    {
        max-width: ${(props) => (props.isClosed ? "950px" : "360px")};
    }

@media (min-width: 1025px) and (max-width:1366px)
    {
        max-width: ${(props) => (props.isClosed ? "1000px" : "420px")};
    }

@media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1050px" : "450px")};
    }

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

    @media (min-width: 769px) and (max-width:1024px)
    {
        width: 190px;
        height: 160px;
    }

    @media (min-width: 1032px) and (max-width:1366px)
    {
        width: 220px;
        height: 190px;
    }


    @media (min-width: 1367px) and (max-width:1440px)
    {
        width: 270px;
        height: 220px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width: 310px;
        height: 260px;
    }
    @media (min-width: 1921px) and (max-width: 2560px)
    {
        width: 400px;
        height: 350px;
    }
`

export const PlayListNameDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;



    @media (min-width: 769px) and (max-width:1024px)
    {
        min-height: 180px;
    }

    @media (min-width: 1032px) and (max-width:1366px)
    {
        min-height: 160px;
    }
    

    @media (min-width: 1367px) and (max-width:1440px)
    {
        min-height: 220px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        min-height: 250px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        min-height: 300px;
    }
`

export const PlayListName = styled.h1`
    color : white;
    font-size: 85px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 769px) and (max-width:805px)
    {
        font-size: 47px;
    }

    @media (min-width: 806px) and (max-width:900px)
    {
        font-size: 55px;
    }

@media (min-width: 901px) and (max-width:1024px)
    {
        font-size: 70px;
    }

    @media (min-width: 1024px) and (max-width:1366px)
    {
        font-size: 80px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 90px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 100px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 130px;
    }
`
export const PlaylistDesc = styled.h4`
    color : #dbdada;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;


    @media (min-width: 769px) and (max-width:1024px)
    {
        font-size: 17px;
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        font-size: 19px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 22px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 25px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 40px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1495px")};
        min-height: 65px;
        padding-top: 13px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
        min-height: 80px;
        padding-top: 15px;
    }
`


export const SearchWrapper = styled.div`
`
export const AddContainer = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1170px" : "946px")};
    position: absolute;
    top: 62px;
    left: 18px;
    padding-inline: 30px;

    @media (min-width: 769px) and (max-width:1024px)
    {
        max-width: ${(props) => (props.isClosed ? "1310px" : "1095px")};
        max-height: 360px;
        padding-inline: 18px;
       left:0px;
    }

    @media (min-width: 1024px) and (max-width:1366px)
    {
        max-width: ${(props) => (props.isClosed ? "1310px" : "1095px")};
        max-height: 360px;
        padding-inline: 22px;
        left:0px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1310px" : "1095px")};
        max-height: 450px;
        padding-inline: 22px;
        left:0px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1765px" : "1495px")};
        max-height: 515px;
        top: 74px;
        left:0px;
    }

     @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "1945px")};
        top: 97px;
        left: 3px;
        max-height: 600px;
    }
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
    background-color: black;
    padding-top: 10px;
    padding-left: 15px;

    @media (min-width: 769px) and (max-width:1024px)
    {
        max-width: ${(props) => (props.isClosed ? "1310px" : "1095px")};
        max-height: 360px;
       
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        max-width: ${(props) => (props.isClosed ? "1310px" : "1095px")};
        max-height: 360px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1210px" : "983px")};
        max-height: 450px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1665px" : "1395px")};
        max-height: 515px;
    }

     @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "1895px")};
        max-height: 600px;
        
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1495px")};
        min-height: 60px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
        min-height: 80px;
        border-radius: 40px;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    max-width: 950px;
    display: flex;
    gap:10px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1290px" : "1090px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1495px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
  
    }
`

export const SearchBar = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    max-width: 950px;
    color : white;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1290px" : "1090px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1495px")};
        font-size: 18px;
    }
    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
        font-size: 26px;
    }
`

export const SongCard = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "986px")};
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1495px")};
    }
    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "1895px")};
    }

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

    @media (min-width: 769px) and (max-width:850px)
    {
      font-size: 13px;
    }

    @media (min-width: 851px) and (max-width:950px)
    {
      font-size: 15px;
    }

    @media (min-width: 951px) and (max-width:1024px)
    {
      font-size: 17px;
    }
    
    @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 20px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 23px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 31px;
    }
`

export const ArtistName = styled.h3`
    color : #dbdada;
    font-size: 12px;


    @media (min-width: 769px) and (max-width:850px)
    {
      font-size: 9px;
    }

    @media (min-width: 851px) and (max-width:950px)
    {
      font-size: 10px;
    }
    @media (min-width: 951px) and (max-width:1024px)
    {
      font-size: 11px;
    }
    

    @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 14px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 16px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 22px;
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

    @media (min-width: 769px) and (max-width:850px)
    {
      font-size: 13px;
      padding:4px;
       max-width: 65px;
    }

    @media (min-width: 851px) and (max-width:950px)
    {
      font-size: 13px;
      padding:4px;
       max-width: 70px;
    }

    @media (min-width: 951px) and (max-width:1024px)
    {
      font-size: 14px;
      padding:6px;
       max-width: 75px;
    }
    

    @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 18px;
       padding:7px;
       max-width: 85px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 20px;
        max-width: 100px;
        padding: 8px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 25px;
        max-width: 135px;
        padding: 10px;
        border-radius: 40px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: ${(props) => (props.isClosed ? "28px" : "16px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: ${(props) => (props.isClosed ? "38px" : "16px")};
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1410px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
  
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1410px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
    }
`
export const Shuffle = styled.h3`
    color : white;
    gap: 15px;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 22px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 25px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 38px;
  
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1510px")};
        max-height: 410px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
        max-height: 620px;
    }
`