import React, { useEffect,useState,useRef } from 'react'
import search1 from './search icon.jpg'
import './weather.css'
import sun from './sun.png'
import humidity from './humidity.png'
import wind from './wind.png'



const Weather = () => {
  const[weatherData,setWeatherData]=useState(false);
  const locRef = useRef(null);
 
  const search = async (city)=>{
    const VITE_APP_ID="7841fb55aa9c68040ef20915b9bfd567";
   
    try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${VITE_APP_ID}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeatherData({
      humidity:data.main.humidity,
      windspeed:data.wind.speed,
      temperature:Math.floor(data.main.temp),
      location:data.name
    }
    )
    } catch (error) {
    }
    };
 useEffect(() =>{
   search("chennai");
 },[])
  return (
    <div>
      <div className='Weather'>
      <div className='search-bar'>
         <input ref={locRef} type='text' placeholder='city'/>
         <img src={search1} onClick={() =>search(locRef.current.value)}/>
      </div>
      <div className='weather-icon'>
          <img id='icon' src={sun}/> 
          <p className='temperature'>{weatherData.temperature}°c</p> 
          <p className='location'>{weatherData.location}
          </p>
      </div>
      <div className='data'>
        <div className='col'>
          <img id='icon1'src={humidity}/>
          <div >
            <p>{weatherData.humidity}%</p>
            <span>humidity</span>
          </div>
        </div>
        <div className='col'>
          <img id='icon1'src={wind}/>
          <div>
            <p>{weatherData.windspeed}km</p>
            <span>wind speed</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}




export default Weather
