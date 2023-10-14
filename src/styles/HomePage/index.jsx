import styled, {keyframes} from 'styled-components'

export const HomeSect = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   position: relative;
   padding-inline: 8px;

   @media (max-width:768px)
    {   
        padding-inline: 0px;
    }
`

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap:10px;
    padding-block: 10px;

     @media (max-width:768px)
    {   
        display: none;
    }
`

export const HomeWrapperTablet = styled.div`
    width: 100%;
    height :100%;
    background: #121212;
    display: none;
    border-radius: 10px;
    position: relative;

    @media (max-width:768px)
    {   
        display: flex;
        flex-direction: column;
    }
`

export const TabletWidgets = styled.div`
    width: 100%;
    max-width: 768px;
    min-height: 55px;
    display: flex;
    gap: 35px;
    align-items: center;
    justify-content: center;
`
export const LibrarySect = styled.div`
    width: 100%;
    height :100%;
    background: linear-gradient(to bottom, #ff6e7f, #ffc5b6);
    display: flex;
    flex-direction: column;
    padding-inline: 10px;
    padding-top: 5px;
    gap: 20px;
    padding-bottom: 50px;
`

export const LibraryHeadingWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
    border-bottom: 1px solid white;
    width: 100%;
    height:100%;
    max-height: 50px;
`
export const LibraryHeading = styled.h2`
    color: white;
`
export const LibraryPlaylists = styled.div`
    width: 100%;
    height: 100%;
    background-color: #121212;
`


export const SideBar = styled.div`
    width: 100%;
    height: 100%;
    max-width: 320px;
    border-radius: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const SideBarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;

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
`   



export const SideBarTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:15px;
    background-color: #121212;
    height: 100%;
    max-height: 200px;
    border-radius: 10px;
    padding-top: 7px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        max-height: 164px;
    }
`

export const ReducedBar = styled.div`
     display: flex;
    flex-direction: column;
    gap: 18px;
    background-color: #121212;
    height: 100%;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 70px;
`

export const SideBarBottomTitleWrap = styled.div`
    padding-left: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const SideBarBottomTitle = styled.h2`
    color: #dadada;
    font-size: 27px;    

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 21px;
    }
`

export const OptionWrapper = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding-left: ${(props) => (props.isClosed ? "30px" : "15px")};
    gap:15px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        padding-left: ${(props) => (props.isClosed ? "35px" : "15px")};
    }

`
export const IconWrapper = styled.div`
    font-size: ${(props) => (props.isClosed ? "35px" : "27px")};
    display: flex;
    cursor: pointer;

    @media (max-width:768px)
    {   
        font-size: ${(props) => (props.reducePadding ? "21px":"38px")};
        color: white;
    }

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: ${(props) => (props.isClosed ? "30px" : "20px")};
    }
    
`
export const AddPlaylists = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
        

`

export const Home = styled.h3`
    font-size: 22px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 18px;
    }
  
`

export const SideBarBottom = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #121212;
    border-radius: 10px;
    padding-top: 10px;    
    gap: 13px;
    padding-bottom: 70px;
`

export const ShowPlaylistContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
`


export const SpotifyImg = styled.img`
    width: 80px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        width: 65px;
    }
    

`

export const SpotifyName = styled.h1`
    color : White;
    font-size : 32px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 25px;
    }

`
export const SideBarBottomUp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
`

export const ShowPlaylistsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction : column;
    gap:${(props) => (props.isClosed ? "18px" : "17px")};
    padding-left: ${(props) => (props.isClosed ? "0px" : "15px")};

    @media (max-width: 768px)
    {
        padding-left: 0px;
      
    }
`

export const MyPlaylistWrapper = styled.div`
    width: 100%;
    display: flex;
    gap:${(props) => (props.isClosed ? "18px" : "17px")};
    padding-left: ${(props) => (props.isClosed ? "0px" : "15px")};

    @media (max-width: 768px)
    {
        padding-left: 0px;
    }
`

export const ShowPlaylists = styled.div`
    width: 100%;
   display: flex;
   justify-content: ${(props) => (props.isClosed ? "center" : "space-between")};
   align-items: center;
   cursor:pointer;
`
export const ShowPlaylistLeft = styled.div`
    display : flex;
    gap:15px;
    padding-left: ${(props) => (props.sidePadding ? "8px" : "0px")}
`

export const NewPlaylist = styled.div`
    
    display : flex;
    align-items: center;
    justify-content : center;
    color : #adadad;
    font-size: ${(props) => (props.isClosed ? "35px" : "25px")};
    cursor: pointer;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: ${(props) => (props.isClosed ? "30px" : "20px")};
    }
    
`

export const DeletePlaylist = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
    color : #adadad;
    font-size: 24px;

    &:hover{
        color: white
    }
`

export const PlaylistsImage = styled.img`
    width: ${(props) => (props.isClosed ? "44px" : "32px")};
    height:  ${(props) => (props.isClosed ? "44px" : "32px")};

    @media (min-width: 769px) and (max-width: 1024px)
    {
        width: ${(props) => (props.isClosed ? "38px" : "28px")};
    height:  ${(props) => (props.isClosed ? "38px" : "28px")};
    }
`
export const PlaylistsName = styled.h3`
    color : white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 22px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 18px;
    }
`
export const ReducedBarWrapper = styled.div`
    width: 100%;
    max-width: 100px;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #121212;
    padding-top: 10px;
`
export const Hero = styled.div`
    width: 100%;
    background-color: #121212;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const HeroTop = styled.div`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-height: 70px;
    padding-inline: ${(props) => (props.sidePadding ? "20px" : "0px")};
    display: flex;
    justify-content: space-between;
    padding-top: ${(props) => (props.topPadding ? "15px" : "0px")};

    @media (max-width:768px)
    {   
        min-height: 52px;
        padding-top: 10px;
    }
    

`

export const HeroTopLeft = styled.div`
    width: 100%;
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
    height: 100%;
     overflow-y:scroll;
    display: flex;
    flex-direction: column;
    padding-inline: 14px;
    gap:15px;
    position: relative;
    padding-top: ${(props) => (props.topPadding ? "30px" : "40px")};
    
    @media (max-width:768px)
    {  
        background-color: #121212; 
        padding-inline: 0px;
        padding-top: ${(props) => (props.reducePadding ? "20px" : "40px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        padding-top: ${(props) => (props.topPadding ? "40px" : "40px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        padding-top: ${(props) => (props.topPadding ? "32px" : "40px")};
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
    position: absolute;
    overflow-y: scroll;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(164px,1fr));
    flex-wrap : wrap;
    justify-content: center;
    padding-bottom: 70px;

    @media (max-width:768px)
    {   
        padding-left: 14px;
        padding-bottom: 50px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        padding-left: ${(props) => (props.isClosed ? "10px" : "5px")};
    }   

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        gap: 25px;
    }
`
export const SongWrapper = styled.div`
    background-color: #222222;
    padding: 15px;
    border-radius: 10px;
    display : flex;
    flex-direction: column;
    gap:10px;
    cursor: pointer;
    position: relative;

    &:hover{
        background-color: #313131;
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
  font-size: 33px;
  color: #2DB656;
  &:active {
    animation: ${HeartbeatAnimation} 0.5s ease-in-out;
  }

`;

export const SongWrapperTop = styled.div`

`

export const SongImg = styled.img`
    width:100%;
    border-radius: 10px;
`
export const SongName = styled.h1`
    color : white;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;

    @media (max-width: 768px)
    {
        font-size: 20px;
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

    @media (max-width: 768px)
    {
        font-size: 15px;
    }
`
