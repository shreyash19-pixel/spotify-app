import styled,{keyframes} from 'styled-components'

export const MusicPlayerWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: black;
  position: absolute;
  bottom: 0px;
  display: flex;

  @media (max-width:768px)
    {   
        min-height: 52px;
        bottom: 50px;
        background: linear-gradient(to bottom, #1a1a2e, #16213e);
    }
`
export const SongInfo = styled.div`
    width:100%;
    max-width: ${(props) => (props.reduce ? "112px" : "330px")};
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:15px;

    @media (max-width:768px)
    {   
        display: none;
    }

`

export const SongInfoLeft = styled.div`
    display: flex;
    gap: 12px;
`

export const SongInfoRight = styled.div`
    display: flex;
    align-items: center;
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

     @media (max-width: 768px)
    {
        animation: none;
        border-radius: 3px;
        width: 30px;
        height:30px;
    }
`
export const SongInfoArtistWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 200px;

    @media (max-width: 400px)
    {
       max-width: 150px;
    }

    @media (max-width: 337px)
    {
       max-width: 110px;
    }

`
export const SongInfoSongName = styled.h1`
  color : white;
  font-size: 24px;
  font-weight: 600;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 768px)
    {
       font-size: 14px;
    }

    @media (max-width: 375px)
    {
       font-size: 11px;
    }
`

export const SongInfoArtistName = styled.h3`
  color : #dbdada;
  font-size: 17px;
  font-weight: 400;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 768px)
    {
       font-size: 11px;
    }

    @media (max-width: 375px)
    {
       font-size: 9px;
    }

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

    @media (max-width:768px)
    {   
        display: none;
    }

`
export const StartTimeWrapper = styled.div`
    position: absolute;
    left: ${(props) => (props.begin ? "0px" : "15px")};
    top:${(props) => (props.begin ? "13px" : "15px")};
`
export const StartTime = styled.h3`
    color : white;
    font-size: ${(props) => (props.begin ? "12px" : "20px")}
`
export const EndTimeWrapper = styled.div`
    position: absolute;
    right:${(props) => (props.begin ? "5px" : "15px")};
    top:${(props) => (props.begin ? "13px" : "15px")};
`

export const ControlsWrapper = styled.div`
    width:100%;
    max-width: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 75px;
    gap:25px;

    
    @media (max-width:768px)
    {   
        min-height: 35px;
        gap: 30px;
    }

    @media (max-width: 325px)
    {
       gap: 20px;
    }
    
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

    
    @media (max-width:768px)
    {   
        width: 20px;
        height: 20px;
        font-size: 24px;
        color: white;
        background-color: transparent;
    }

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

    @media (max-width:768px)
    {   
        width: 25px;
        height: 25px;
        font-size: 24px;
        color: white;
        background-color: transparent;
    }
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

    @media (max-width: 768px)
  {
        width:15px;
        height:15px;
        border: 5px solid green;
  }
  }

  @media (max-width: 768px)
  {
    position: absolute;
    left:0px;
    height: 3px;
  }
  
`