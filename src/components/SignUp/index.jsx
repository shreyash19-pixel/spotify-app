import React , { useState }from 'react'
import { Error,Signin,ErrorWrapper, SignInBottom,ForgotPass, SignInButton, SignInForm, SignInFormWrap, SignInHeadingWrap, SignInMiddle, SignInMiddleBottom, SignInMiddleMid, SignInMiddleTop, SignInSect, SignInTop, SignInTopWrap, SignInWrap, SpotifyHeading, SpotifyImg, UserName, UserNameWrap } from '../../styles/SignIn';
import SpotifyLogo from '../../assets/spotify-logo.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../schemas";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const registerFunction = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message); 
    }
  };


  return (
    <SignInSect>
        <SignInWrap>
            <SignInForm onSubmit={handleSubmit(onSubmitHandler)}>
                <SignInFormWrap>
                    <SignInTop>
                        <SignInTopWrap>
                            <SpotifyImg src = {SpotifyLogo}/>
                            <SpotifyHeading>Spotify</SpotifyHeading>
                        </SignInTopWrap>
                    </SignInTop>
                    <SignInMiddle>
                        <SignInMiddleTop>
                            <SignInHeadingWrap>
                                <Signin>SIGN UP</Signin>
                            </SignInHeadingWrap>
                        </SignInMiddleTop>
                        <SignInMiddleMid>
                            <UserNameWrap>
                                <UserName 
                                placeholder='Email'
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                {...register("email")}
                                onChange={(event) => {
                                setRegisterEmail(event.target.value);
                                }}
                                />
                            </UserNameWrap>
                            <ErrorWrapper>
                            <ErrorWrapper>
                                {errors.email ? (
                                <Error>{errors.email.message}</Error>
                                ) : (
                                <Error>&nbsp;</Error>
                                )}
                            </ErrorWrapper>
                            </ErrorWrapper>
                            <UserNameWrap>
                                <UserName 
                                 placeholder='Password'
                                 name="password"
                                 label="Password"
                                 type="password"
                                 id="password"
                                 autoComplete="new-password"
                                 {...register("password")}
                                 onChange={(event) => {
                                   setRegisterPassword(event.target.value);
                                 }}
                                />

                            </UserNameWrap>
                            <ErrorWrapper>
                            <ErrorWrapper>
                                {errors.password ? (
                                <Error>{errors.password.message}</Error>
                                ) : (
                                <Error>&nbsp;</Error>
                                )}
                            </ErrorWrapper>
                            </ErrorWrapper>
                        </SignInMiddleMid>
                        <SignInMiddleBottom>
                            <SignInButton
                            type="submit"
                            variant="contained"
                            onClick={registerFunction}
                            >
                            SIGN UP
                            </SignInButton>
                        </SignInMiddleBottom>
                    </SignInMiddle>
                    <SignInBottom>
                    <ForgotPass>Have an Account? <Link to="/SignIn"><span style = {{color : "white"}}>Let's Sign in</span></Link></ForgotPass>
                    </SignInBottom>
                </SignInFormWrap>
            </SignInForm>
        </SignInWrap>
    </SignInSect>
  )
}

export default SignUp