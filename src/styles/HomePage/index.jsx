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
    background-color: #121212;
    border-radius: 10px;
    min-height: 605px;
    display: flex;
    justify-content: center;
`
export const SideBarWrapper = styled.div`
    width: 100%;
    max-width: 300px;
    padding-block: 20px;
    display: flex;
    flex-direction: column;
    gap:50px;
`

export const SideBarTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SideBarMiddleBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap:40px;
    position: relative;
`

export const SideBarMiddle = styled.div`
    display: flex;
    flex-direction: column;
    gap:25px;
`

export const SideBarMiddleTitleWrap = styled.div`
    padding-left: 15px;;
`

export const SideBarMiddleTitle = styled.h2`
    color: #dadada;
`

export const OptionWrapper = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding-left: 15px;
    gap:7px;

`
export const IconWrapper = styled.div`
    font-size: 25px;
    display: flex;
    
`

export const Home = styled.h3`
    font-size: 20px;
`

export const SideBarBottom = styled(SideBarMiddle)`

`

export const SpotifyImg = styled.img`
    width: 100%;
    max-width: 80px;
`

export const SpotifyName = styled.h1`
    color : White
`

export const ShowPlaylists = styled.div`
    width: 100%;
    max-width: 300px;
    min-height: 50px;
    position: absolute;
    bottom: 0px;
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
    max-height: 460px;
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