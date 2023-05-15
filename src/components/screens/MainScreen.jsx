import React, { useEffect, useState } from "react";
import Header from "../includes/Header";
import Slider from "react-slick";
import axios from "axios";

const MainScreen = () => {
    const [movie,setMovie]=useState([])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      const moviesData=()=>{
        axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=c5e74609&page=1').then(function(res){
            if(res.status == 200){
                setMovie(res.data);
                console.log(movie);
            }
        })
      }
      useEffect(()=>{
         moviesData()
           
      },[])
    return (
        <Header/>
    );
};

export default MainScreen;
