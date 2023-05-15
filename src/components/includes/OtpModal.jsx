import React, { useState } from 'react'
import { styled } from 'styled-components'
import { userConfig } from '../general/axiosConfig';
import { useBearStore } from '../../context/Store';

const OtpModal = ({phone,email}) => {
    const [otp,setOtp]=useState('')
    const [error,setError]=useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setOtp(inputValue.replace(/[^0-9]/g, ''))
        // You can use the 'numbersOnly' value as needed
      };
      const updateUserData = useBearStore((state) => state.updateUserData)
    const handleSubmit = ()=>{
        userConfig.post('/accounts/verify-otp/',{
            phone:phone,
            country:"IN",
            otp:Number(otp),
            email:email
        }).then(function(res){
            if(res.data.StatusCode==6000){
                updateUserData(res.data.data.username,true,res.data.data.access.access)
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
    <Cover><Container>
        <Top>
            <h3>ENTER YOUR OTP</h3>
            <p>otp has sent to +91 9995819386</p>
        </Top>
        <OtpContainer>
            <input type='text' placeholder='- - - -' onChange={(e)=>handleInputChange(e)} maxLength={4} value={otp}/>
        </OtpContainer>
        {error ? <ErrorP>{errorMessage}</ErrorP> : null}
        <ButtonSect>
            <Button onClick={()=>handleSubmit()}>SUBMIT</Button>
        </ButtonSect>
    </Container></Cover>
  )
}

export default OtpModal
const Cover = styled.div`
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    height: 100vh;
    background-color: #00000060;
    backdrop-filter: blur(5px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width:35%;
    /* height: 200px; */
    background-color:var(--secondary-color);
    border-radius: 7px;
    padding: 20px;
`;
const Top = styled.div`
    padding: 10px 0px;
    h3{
        font-size: 30px;
        /* text-align: center; */
    }
    p{
        font-size: 14px;
    }
`;
const OtpContainer = styled.div`
    padding:20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    input{
        width:50%;
        padding: 10px;
        border-bottom:1px solid var(--primary-color);
        font-size: 30px;
        color:#fff;
        letter-spacing: 23px;
        text-align: center;
        &::placeholder{
            letter-spacing: 23px;
        }
    }
`;
const ButtonSect = styled.div`
    padding: 10px 0px;
`;
const Button = styled.div`
    width: 35%;
    height:45px;
    background-color: #1177f6;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    transform: skew(-10deg);
    border-radius: 5px;
    font-weight: 600;
    cursor:pointer;
    backdrop-filter: blur(5px);
    float: right;
`;
const ErrorP = styled.p`
    font-size: 14px;
    color:red;
`;