import styled, {keyframes} from 'styled-components'

export const HomeSect = styled.div`
    width: 100%;
    max-width: 1400px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
   position: relative;
`

export const HomeWrapper = styled.div`
    width: 100%;
    max-width: 1340px;
    display: flex;
    gap:10px;
    padding-block: 10px;
`

export const SideBar = styled.div`
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    min-height: 605px;
    display: flex;
    justify-content: center;
`
export const SideBarWrapper = styled.div`
    width: 100%;
    max-width: 300px;
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
    gap:20px;
    background-color: #121212;
    min-height: 190px;
    border-radius: 10px;
`


export const SideBarBottomTitleWrap = styled.div`
    padding-left: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const SideBarBottomTitle = styled.h2`
    color: #dadada;
`

export const OptionWrapper = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding-left: 15px;
    gap:15px;

`
export const IconWrapper = styled.div`
    font-size: 27px;
    display: flex;
    
`
export const AddPlaylists = styled.div`
    width: 100%;
    max-width: 235px;
    display: flex;
    justify-content: space-between;
`

export const Home = styled.h3`
    font-size: 17px;
`

export const SideBarBottom = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 340px;
    background-color: #121212;
    border-radius: 10px;
    gap: 20px;
    padding-top: 20px;
`

export const SpotifyImg = styled.img`
    width: 80px;
`

export const SpotifyName = styled.h1`
    color : White;
    font-size : 32px;
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
`

export const DeletePlaylist = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
    color : #adadad;
    font-size: 22px;

    &:hover{
        color : white
    }
`

export const PlaylistsImage = styled.img`
    width: 30px;
    height: 30px;
`
export const PlaylistsName = styled.h3`
    color : white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
`



export const Hero = styled.div`
    width: 100%;
    max-width: 1040px;
    background-color: #121212;
    border-radius: 10px;
    min-height: 605px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroTop = styled.div`
    width: 100%;
    max-width: 1040px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-height: 70px;
    padding-inline: 20px;
    display: flex;
    justify-content: space-between;
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
    max-width: 1000px;
    min-height: 535px;
    display: flex;
    flex-direction: column;
    gap:15px;
    position: relative;
    padding-top: 40px;
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
    max-width: 1000px;
    max-height: 500px;
    overflow-y: auto;
    display : flex;
    gap: 15px;
    flex-wrap : wrap;
    justify-content: center;
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
`;

export const SongWrapperTop = styled.div`
    
`

export const SongImg = styled.img`
    width:100%;
    max-width:200px;
    border-radius: 10px;
`
export const SongName = styled.h1`
    color : white;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
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
`
