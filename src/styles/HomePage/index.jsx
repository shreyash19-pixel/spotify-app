import styled, {keyframes} from 'styled-components'

export const HomeSect = styled.div`
    width: 100%;
    max-width: 1400px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
   position: relative;
   padding-inline: 8px;

   @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 1440px;
        min-height: 760px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 1920px;
        min-height: 965px;
    }
`

export const HomeWrapper = styled.div`
    width: 100%;
    max-width: 1340px;
    display: flex;
    gap:10px;
    padding-block: 10px;
    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 1420px;
        min-height: 760px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 1900px;
        min-height: 965px;
    }
`

export const SideBar = styled.div`
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    min-height: 605px;
    display: flex;
    justify-content: center;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 330px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 400px;
    }
`
export const SideBarWrapper = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap:10px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 330px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 400px;
    }
`
export const SpotifyHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ExpandWrapper = styled.div`
    font-size: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 34px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 50px;
        
    }
`   



export const SideBarTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
    background-color: #121212;
    min-height: 190px;
    border-radius: 10px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        min-height: 220px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        min-height: 280px;
        justify-content: flex-start;
        padding-top: 25px;
        gap: 27px;
    }
`


export const SideBarBottomTitleWrap = styled.div`
    padding-left: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const SideBarBottomTitle = styled.h2`
    color: #dadada;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 30px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
       font-size: 35px;
    }

    
`

export const OptionWrapper = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding-left: 15px;
    gap:15px;

`
export const IconWrapper = styled.div`
    font-size: ${(props) => (props.isClosed ? "35px" : "27px")};
    display: flex;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        min-height: 30px;
        font-size: ${(props) => (props.isClosed ? "40px" : "30px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: ${(props) => (props.isClosed ? "55px" : "35px")};
    }
    
`
export const AddPlaylists = styled.div`
    width: 100%;
    max-width: 235px;
    display: flex;
    justify-content: space-between;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 266px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 330px;
    }
`

export const Home = styled.h3`
    font-size: 17px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 22px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 27px;
    }
`

export const SideBarBottom = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 340px;
    background-color: #121212;
    border-radius: 10px;
    gap: 20px;
    padding-top: 20px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        min-height: 440px;
        gap: 23px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        min-height: 590px;
        gap: 27px;
    }
`

export const SpotifyImg = styled.img`
    width: 80px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width: 95px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width: 130px;
    }
`

export const SpotifyName = styled.h1`
    color : White;
    font-size : 32px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 37px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 45px;
    }
`

export const ShowPlaylistsWrapper = styled.div`
     max-height: 148px;
    overflow-y: auto;
    display: flex;
    flex-direction : column;
    gap:15px;
    padding-left:15px;
`

export const ShowPlaylists = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor:pointer;
   padding-right: 7px;
`
export const ShowPlaylistLeft = styled.div`
    display : flex;
    gap:15px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        padding-left: ${(props) => (props.isClosed ? "8px" : "0px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        padding-left: ${(props) => (props.isClosed ? "12px" : "0px")};
    }


`

export const NewPlaylist = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
    color : #adadad;
    font-size: ${(props) => (props.isClosed ? "35px" : "25px")};
    padding-left: ${(props) => (props.isClosed ? "5px" : "0px")};


     @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: ${(props) => (props.isClosed ? "40px" : "25px")};
        padding-left: ${(props) => (props.isClosed ? "18px" : "0px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: ${(props) => (props.isClosed ? "55px" : "30px")};
        padding-left: ${(props) => (props.isClosed ? "22px" : "0px")};
    }
`

export const DeletePlaylist = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
    color : #adadad;
    font-size: 22px;

    &:hover{
        color: white
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 26px; 
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 28px;
    }
`

export const PlaylistsImage = styled.img`
    width: ${(props) => (props.isClosed ? "50px" : "30px")};
    height:  ${(props) => (props.isClosed ? "50px" : "30px")};

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width:  ${(props) => (props.isClosed ? "60px" : "33px")};
        height:  ${(props) => (props.isClosed ? "60px" : "33px")};
        
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width:  ${(props) => (props.isClosed ? "75px" : "44px")};
        height:  ${(props) => (props.isClosed ? "75px" : "44px")};
    }
`
export const PlaylistsName = styled.h3`
    color : white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 22px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 28px;
    }
`
export const ReducedBarWrapper = styled.div`
     width: 100%;
    max-width: 80px;
    border-radius: 10px;
    min-height: 605px;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    background-color: #121212;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 105px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
       max-width: 130px;
    }
    
`



export const Hero = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "1030px")};
    background-color: #121212;
    border-radius: 10px;
    min-height: 605px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1320px" : "1090px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1495px")};
    }
`

export const HeroTop = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "1040px")};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-height: 70px;
    padding-inline: ${(props) => (props.sidePadding ? "20px" : "0px")};
    display: flex;
    justify-content: space-between;
    padding-top: ${(props) => (props.topPadding ? "15px" : "0px")};

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1320px" : "1090px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1475px")};
    }
   

`



export const HeroTopLeft = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    gap:30px;
`

export const HeroTopRight = styled.div`
    display: flex;
    align-items: center;
`

export const HeroIcons = styled.div`
    background-color: #5e5b5b;
    border-radius: 100%;
    text-align: center;
    width: 40px;
    min-height: 40px;
    color:white;
    cursor: pointer;
    font-size: 20px;
    display : flex;
    align-items:center;
    justify-content: center;
`


export const HeroBottom = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1250px" : "1000px")};
    min-height: 535px;
    display: flex;
    flex-direction: column;
    gap:15px;
    position: relative;
    padding-top: ${(props) => (props.topPadding ? "45px" : "40px")};


    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1320px" : "1050px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1440px")};
    }
`

export const HeroBottomTop = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const HeroBottomTopHeading = styled.h1`
    color : white
`

export const HeroMusicSec = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1270px" : "1000px")};
    max-height: 500px;
    overflow-y: auto;
    display : flex;
    gap: 15px;
    flex-wrap : wrap;
    justify-content: center;

    
    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-height: 630px;
        max-width: ${(props) => (props.isClosed ? "1290px" : "1100px")};
        padding-left: ${(props) => (props.isClosed ? "10px" : "0px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1475px")};
        padding-left: ${(props) => (props.isClosed ? "10px" : "20px")};
        max-height: 830px;
    }

    

`

export const SongWrapper = styled.div`
    background-color: #222222;
    padding: 15px;
    border-radius: 10px;
    display : flex;
    flex-direction: column;
    gap:10px;
    width: 100%;
    max-width: 230px;
    cursor: pointer;
    position: relative;

    &:hover{
        background-color: #313131;
    }
    
    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 235px;
    }

    @media (min-width: 1841px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "320px" : "330px")};
        padding: 17px;
    }

    @media (min-width: 1800px) and (max-width:1840px)
    {
        max-width: ${(props) => (props.isClosed ? "310px" : "320px")};
        padding: 16px;
    }

    @media (min-width: 1760px) and (max-width:1799px)
    {
        max-width: ${(props) => (props.isClosed ? "300px" : "310px")};
        padding: 15px;
    }

    @media (min-width: 1722px) and (max-width:1759px)
    {
        max-width: ${(props) => (props.isClosed ? "295px" : "300px")};
        padding: 14px;
    }

    @media (min-width: 1682px) and (max-width:1721px)
    {
        max-width: ${(props) => (props.isClosed ? "285px" : "290px")};
        padding: 13px;
    }

    @media (min-width: 1641px) and (max-width:1681px)
    {
        max-width: ${(props) => (props.isClosed ? "275px" : "280px")};
        padding: 13px;
    }

    @media (min-width: 1600px) and (max-width:1640px)
    {
        max-width: ${(props) => (props.isClosed ? "265px" : "270px")};
        padding: 13px;
    }

    @media (min-width: 1553px) and (max-width:1599px)
    {
        max-width: ${(props) => (props.isClosed ? "260px" : "260px")};
        padding: 12px;
    }

    @media (min-width: 1515px) and (max-width:1553px)
    {
        max-width: ${(props) => (props.isClosed ? "250px" : "250px")};
        padding: 12px;
    }

    @media (min-width: 1485px) and (max-width:1515px)
    {
        max-width: ${(props) => (props.isClosed ? "245px" : "240px")};
        padding: 12px;
    }

    @media (min-width: 1442px) and (max-width:1485px)
    {
        max-width: ${(props) => (props.isClosed ? "240px" : "230px")};
        padding: 12px;
    }


`

const HeartbeatAnimation = keyframes`
0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const LikeWrapper = styled.div`
  position: absolute;
  top: 18px;
  right: 22px;
  font-size: 30px;
  color: #2DB656;
  &:active {
    animation: ${HeartbeatAnimation} 0.5s ease-in-out;
  }

  
  @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 33px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 44px;
    }
`;

export const SongWrapperTop = styled.div`
    
`

export const SongImg = styled.img`
    width:100%;
    max-width:200px;
    border-radius: 10px;

    
    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 210px;
    }
    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 300px;
    }
`
export const SongName = styled.h1`
    color : white;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;

    
    @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 27px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 30px;
    }

`


export const SongSource = styled.source`
    
`

export const SongWrapperBottom = styled.div`
    
`

export const ArtistName = styled.h3`
    color : white;
    font-size: 18px;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    
    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 21px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 25px;
    }
`
