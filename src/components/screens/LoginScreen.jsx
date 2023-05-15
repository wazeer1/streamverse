import React, { useState } from 'react'
import { styled } from 'styled-components'
import { AiOutlineTwitter, AiOutlineGoogle, AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useBearStore } from '../../context/Store';
import { userConfig } from '../general/axiosConfig';

const LoginScreen = () => {
    const userData = useBearStore((state) => state.userData)
    const updateUserData = useBearStore((state) => state.updateUserData)
    console.log(userData);
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const handleLogin = ()=>{
        userConfig.post('/accounts/login/',{
            username:username,
            password:password
        }).then(function(res){
            if(res.data.StatusCode == 6000){
                updateUserData(username,true,res.data.data.access)
            }
        })
    }
  return (
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
            <input type='password' placeholder='PASSWORD' onChange={(e)=>setPassword(e.target.value)}/>
        </BottomContainer>
        <ButtonSect>
            <p>Forget Password?</p>
            <Button className='login' onClick={()=>{handleLogin()}}>Log in</Button>
        </ButtonSect>
        <RedirectSect>
            <RedirectLink to="/auth/register">Dont have account?</RedirectLink>
        </RedirectSect>
        </Container>
    </Cover>
  )
}

export default LoginScreen

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