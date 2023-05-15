import React, { useState } from 'react'
import { styled } from 'styled-components'
import { AiOutlineTwitter, AiOutlineGoogle, AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { userConfig } from '../general/axiosConfig';
import OtpModal from '../includes/OtpModal';

const RegisterScreen = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [username,setUsername]=useState('')
    const [modal,setModal]=useState(false)
    const [error,setError]=useState(false)
    const [errorMessage,setErrorMessage]=useState('')

    const handleLogin = () =>{
        userConfig.post('/accounts/signup/',{
            name:name,
            phone:phone,
            password:password,
            username:username,
            email:email,
            country:"IN"
        }).then(function(res){
            if(res.data.StatusCode == 6000){
                setModal(true)
            }else if(res.data.StatusCode == 6001){
                setError(true)
                setErrorMessage(res.data.data.message)
                setTimeout(() => {
                    setError(false)
                    setErrorMessage('')
                }, 2000);
            }
        })
    }
  return (
    <>
    <Cover className='wrapper'>
        <Container>
        <Head>
        <h1>STREAMVERSE</h1>
        </Head>
        <Top>
        <Button><AiOutlineTwitter size="24px" color="blue"/>Continue with twitter</Button>
        <ButtonContainer>
            <Button className='half'><AiOutlineGoogle size="24px"/>Google</Button>
            <Button className='half'><AiFillFacebook size="24px"/>Google</Button>
        </ButtonContainer>
        </Top>
        <BottomContainer>
            <input type='text' placeholder='USERNAME' onChange={(e)=>setUsername(e.target.value)}/>
            <input type='name' placeholder='FULLNAME' onChange={(e)=>setName(e.target.value)}/>
            <input type='number' placeholder='PHONE' onChange={(e)=>setPhone(e.target.value)}/>
            <input type='email' placeholder='EMAIL' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='PASSWORD' onChange={(e)=>setPassword(e.target.value)}/>
        </BottomContainer>
        {error ? <ErrorP>{errorMessage}</ErrorP> : <p></p>}
        <ButtonSect>
            <p>Forget Password?</p>
            <Button className='login' onClick={()=>handleLogin()}>Log in</Button>
        </ButtonSect>
        <RedirectSect>
            <RedirectLink to="/auth/login">Already have account?</RedirectLink>
        </RedirectSect>
        </Container>
    </Cover>
    {modal ? <OtpModal phone={phone} email={email}/> : null}
    </>
  )
}

export default RegisterScreen

const Cover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const Container = styled.div`
    width:35%;
    padding: 15px;
    /* background-color: aliceblue; */
`;
const Head = styled.div`
text-align: center;
    h1{
        font-size: 34px;
    }

`;
const Top = styled.div`
    margin-top: 15px;
`;
const Button = styled.div`
    width: 100%;
    height:45px;
    background-color: #33333360;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    transform: skew(-10deg);
    border-radius: 5px;
    font-weight: 600;
    cursor:pointer;
    backdrop-filter: blur(5px);
    &.half{
        width: 48%;
    }
    &.login{
        width:45%;
        background: #1177f6;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: .5px solid #333333;
`;
const BottomContainer = styled.div`
    padding-top: 20px;
    input{
        width: 100%;
        height:45px;
        background-color: #33333360;
        transform: skew(-10deg);
        border-radius: 5px;
        padding: 0px 8px;
        color:#fff;
        font-size: 18px;
        margin-bottom: 15px;
    }
`;
const ButtonSect = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const RedirectSect = styled.div``;
const RedirectLink = styled(Link)`
    color:#fff;
`;
const ErrorP = styled.p`
    color:red;
    font-size: 14px;
`;