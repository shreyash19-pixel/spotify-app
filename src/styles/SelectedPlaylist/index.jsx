import styled from 'styled-components'


export const HeroWrapper = styled.div`
    width: 100%;
    max-width: 1040px;
    background-color: #121212;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;
`

export const PlaylistsWrapper = styled.div`
    width:100%;
    max-width: 986px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PlaylistInfoWrapper = styled.div`
     width: 100%;
     max-width: 986px;
     min-height: 40px;
     display: flex;
     gap:15px;
`
export const PlaylistInfoLeft = styled.div`

`

export const PlaylistInfoRight = styled.div`

`

export const PlaylistImage = styled.img`
    width: 250px;
    height: 200px;
`

export const PlayListNameDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
`

export const PlayListName = styled.h1`
    color : white;
    font-size: 85px;
`
export const PlaylistDesc = styled.h4`
    color : #dbdada;
`

export const SearchAndAdd = styled.div`
    width:100%;
    max-width:986px;
    display : flex;
    flex-direction : column;
    justify-content: center;
    position: relative;
`


export const SearchWrapper = styled.div`
`
export const AddWrapper = styled.div`
    width: 100%;
    max-width: 946px;
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
`
export const SearchBarWrapper = styled.div`
    width: 100%;
    max-width: 400px;
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
    max-width: 986px;
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
`

export const ArtistWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const SongName = styled.h2`
    color : white;
    font-size: 18px;
`

export const ArtistName = styled.h3`
    color : #dbdada;
    font-size: 12px;
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
`
export const AddedSongs = styled.div`
    color : white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
export const ShuffleAddedWrapper = styled.div`
     width: 100%;
    max-width:986px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ShuffleWrapper = styled.div`
    width: 100%;
    max-width: 986px;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 5px;
`
export const Shuffle = styled.h3`
    color : white;
    gap: 15px;
`

export const AdddedSongsWrapper = styled.div`
    width: 100%;
    max-width:986px;
    max-height: 180px;
    overflow-y: auto;
    display : flex;
    flex-direction : column;
    gap: 15px;
    padding-right: 15px;
`