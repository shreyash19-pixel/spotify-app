import styled,{keyframes} from 'styled-components'

export const MusicPlayerWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: black;
  position: absolute;
  bottom: 0px;
  display: ${(props) => (props.mobile ? "none" : "flex")};

  @media (max-width:768px)
    {   
        display: ${(props) => (props.mobile ? "flex" : "none")};
    }
`
export const SongInfo = styled.div`
    width:100%;
    max-width: ${(props) => (props.isLarge ? "102px" : "330px")};
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:15px;

`
export const SongInfoImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const SongInfoImg = styled.img`
    width: 55px;
    height: 55px;
     border-radius: 50%;
     animation: ${Rotate} 4s linear infinite;
`
export const SongInfoArtistWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 200px;

`
export const SongInfoSongName = styled.h1`
  color : white;
  font-size: 24px;
  font-weight: 600;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const SongInfoArtistName = styled.h3`
  color : #dbdada;
  font-size: 17px;
  font-weight: 400;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`

export const MusicPlayer = styled.div`
    width: 100%;
    min-height: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-left: 6px;

`
export const StartTimeWrapper = styled.div`
    position: absolute;
    left:15px;
    top:15px;
`
export const StartTime = styled.h3`
    color : white;
    font-size: 20px;
`
export const EndTimeWrapper = styled.div`
    position: absolute;
    right:15px;
    top:15px;
`

export const ControlsWrapper = styled.div`
    width:100%;
    max-width: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 75px;
    gap:25px;

    
`
export const NextWrapper = styled.div`
    background-color: white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`
export const PlayWrapper = styled.div`
    background-color: white;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`

export const SongAudio = styled.audio`
`

export const ProgressBar = styled.input`    
  -webkit-appearance: none;
  width:100%;
  height: 6px;
  background-color: green;
  border-radius: 4px;
  cursor: pointer;

  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 8px solid green;
  }
  
`