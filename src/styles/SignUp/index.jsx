import styled from 'styled-components'

export const SignUpContainer = styled.div`
    width: 100%;
    height: 100vh;
    height:100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 25px;
    background: linear-gradient(135deg, #1DB954, #03A9F4);
`

export const SignUpWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignUpForm = styled.form`
    width: 100%;
    max-width: 410px;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 10px;
    background-color: #2E2F33;
    padding-inline: 10px;
    padding-top: 30px;
`

export const HeadingWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SpotifyImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SpotifyImg = styled.img`
    width: 80px;
    height: 55px;
`

export const Heading = styled.h1`
    color: white;
    font-size: 36px;
`

export const CredentialsWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const SignUpHeading = styled.h3`
    color: white
`

export const SignUpHeadingWrap = styled.div`
    width: 100%;
    text-align: center;
`

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const EmailInputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-inline: 25px;
    flex-direction: column;
    text-align: center;
    position: relative;
`
export const EmailInput = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 30px;
    outline: none;
    border: none;
    
`

export const SubmitBtn = styled.button`
    width: 100%;
    background: linear-gradient(135deg, #1DB954, #03A9F4);
    color: white;
    padding: 12px;
    border-radius: 30px;
    outline: none;
    border: none;
    cursor: pointer;
`

export const ErrorMessageWrap = styled.div`
    width: 100%;
    min-height: 22px;
    padding-inline: 12px;
    display: flex;
    align-items: center;
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 13px;

    @media (max-width: 403px)
    {
        font-size: 10px;
    }

    @media (max-width: 344px)
    {
        font-size: 8px;
    }
`

export const Navigate= styled.p`
    color: grey;

    @media (max-width: 385px)
    {
        font-size: 12px;
    }
`
export const NavSpan = styled.span`
    color: white;
    text-decoration: underline;
    cursor: pointer;
`
export const ShowPassword = styled.div`
    color: black;
    font-size: 22px;
    position: absolute;
    right: 45px;
    bottom: 24px;
    cursor: pointer;
`