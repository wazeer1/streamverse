import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { useBearStore } from '../../context/Store'
import { userConfig } from '../general/axiosConfig'

const Header = () => {
    const userData = useBearStore((state) => state.userData)
    useEffect(()=>{
        userConfig.get('/accounts/avatars/',{
            headers: {
                Authorization: `Bearer ${userData.accessToken}`,
            },
        }).then(function(res){
            console.log(res);
        })
    },[])

  return (
    <Cover className="wrapper">
        <Left>
            <h1>STREAMVERSE</h1>
        </Left>
        <Center>
            <Switch className='active'>Movies</Switch>
            <Switch>Series</Switch>
            <Switch>Kids</Switch>
        </Center>
        <Right>{userData.isVerified ? <h2>{userData.username}</h2> : <Button>Login</Button>}</Right>
    </Cover>
  )
}

export default Header
const Cover = styled.div`
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`

`;
const Center = styled.div`
    width:400px;
    background: #141414;
    /* height:25px; */
    border-radius: 20px;
    display: flex;

`;
const Right = styled.div``;
const Switch = styled.div`
    width:33%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    h2{
        font-size: 16px;
    }
    &.active{
        background:var(--secondary-color);
        border-radius: 20px;
    }
`;
const Button = styled.div`
    width:120px;
    height:35px;
    background-color: var(--secondary-color);
    transform: skew(-10deg);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;