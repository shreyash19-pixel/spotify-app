import React, {useEffect, useState,useContext} from 'react'
import {Navigate, CredentialsWrap, EmailInput, EmailInputWrapper, Heading, HeadingWrap, InputWrapper, SignUpContainer, SignUpForm, SignUpWrapper, SignUpHeading, SignUpHeadingWrap, SpotifyImg, SpotifyImgWrap, SubmitBtn, ErrorMessageWrap, ErrorMessage, NavSpan, ShowPassword } from '../../styles/SignUp'
import SpotifyLogo from '../../assets/spotify-logo.png'
import {useFormik} from "formik"
import { signup } from '../../schemas'
import { auth } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import AppContext from '../../AppContext'
import { Link, useNavigate } from 'react-router-dom'
import {BiHide,BiShowAlt} from 'react-icons/bi'

const onSubmit = async (values,actions) => {
  await new Promise((resolve) => setTimeout(resolve,1000))
  actions.resetForm()
}

const SignUp = () => {


  const {credentials, setCredentials} = useContext(AppContext)
  const [errMess, setErrMess] = useState('')
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(true)
  

  useEffect(() => {
      localStorage.setItem('creds', JSON.stringify(credentials))
  },[credentials])

  const {values, errors,handleChange, touched, isSubmitting, handleBlur, handleSubmit} = useFormik({
    initialValues : {
      email : "",
      password : ""
    },
    validationSchema: signup,
    onSubmit
  })

  const registerFunction = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(user);
      alert("Registration Successfull")
      navigate("/SignIn")
      const updatedList = {
        email : values.email,
        password : values.password
      }

      setCredentials([...credentials,updatedList])

    } catch (error) {
      setErrMess(error.message)
      console.log(error.message); 
    }
  };

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <SignUpForm autoComplete='' onSubmit={handleSubmit}>
          <HeadingWrap>
            <SpotifyImgWrap>
              <SpotifyImg src = {SpotifyLogo}/>
            </SpotifyImgWrap>
            <Heading>Spotify</Heading>
          </HeadingWrap>
          <CredentialsWrap>
            <SignUpHeadingWrap>
              <SignUpHeading>SIGN UP</SignUpHeading>
            </SignUpHeadingWrap>
            <InputWrapper>
              <EmailInputWrapper>
                <EmailInput value = {values.email} onBlur = {handleBlur} onChange = {handleChange} id = "email" type = "text" placeholder='Email'/>
                {errMess.length > 0 ? (<ErrorMessageWrap>
                  <ErrorMessage>{errMess.slice(22,-2)}</ErrorMessage>
                </ErrorMessageWrap>) : 
                (<ErrorMessageWrap>
                  {errors.email && touched.email ? (<ErrorMessage>{errors.email}</ErrorMessage>) : (<ErrorMessage>{''}</ErrorMessage>)} 
                </ErrorMessageWrap>)}
              </EmailInputWrapper>
              <EmailInputWrapper>
                <EmailInput value = {values.password} onBlur = {handleBlur} onChange = {handleChange} id = "password" type = {showPass ? "password" : "text"} placeholder = 'Password'/>
                <ShowPassword onClick = {handleShowPass}> {showPass ? <BiShowAlt/> : <BiHide/>}</ShowPassword>
                <ErrorMessageWrap>
                  {errors.password && touched.password ? (<ErrorMessage>{errors.password}</ErrorMessage>) : (<ErrorMessage>{''}</ErrorMessage>)}
                </ErrorMessageWrap>
              </EmailInputWrapper>
            </InputWrapper>
          </CredentialsWrap>
          <EmailInputWrapper>
          <SubmitBtn onClick = {registerFunction} isSubmit = {isSubmitting} disabled = {isSubmitting} type = "submit">SIGN IN</SubmitBtn>
          </EmailInputWrapper>
          <EmailInputWrapper>
            <Navigate>Already have an acoount? <Link to = "/SignIn"><NavSpan>Signin</NavSpan></Link></Navigate>
          </EmailInputWrapper>
        </SignUpForm>
      </SignUpWrapper>
    </SignUpContainer>
  )
}

export default SignUp