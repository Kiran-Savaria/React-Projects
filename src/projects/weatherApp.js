import '../App.css';
import { useEffect, useState } from 'react';
import defimg from '../images/weather.jpg'; 
import { Recycle, ThermometerHalf, EmojiSmile, Moisture } from 'react-bootstrap-icons';
 
function WeatherApp(){
  // const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState({
    name: "London",
    weather:[
      {
        description: "Cloudy",
      }
    ],
    main: {
      temp: 21,
      humidity: 30,
      feels_like: 40
    }
  });
  // const [loading,setLoading] = useState(true);
  const [image, setImage] = useState({
    alt_description: "Default Image",
    urls: {
        small: defimg,
      },
  });
 
    useEffect(() => {
      const fetchWeather = async () => { 
        const result = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=3189733caaf0cde2734aa561d722bc92&units=metric');
        const newData = await result.json();
          console.log(newData)
          setWeather(newData);
      };
      fetchWeather();
    },[])

    // useEffect(() => {
    //   fetch('https://api.unsplash.com/photos/random?client_id=zKAhJ0KdAt1-XBDbl8M2Gq8sRf4KSvP9Lvj5Pnw25yQ')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     setImage(res)}
    //     )
    //   .catch(error => console.error('Error Unsplash: ', error))
    // }, [])

    return(
      <div className='container' style={{
        minHeight: '100vh',
        backgroundImage: `url(${image.urls.small})`,
        backgroundSize: 'cover',
        overflowY: 'hidden',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <div className='weatherContainer'>
        <h1>{weather.name}</h1>
        <p>{weather.weather[0].description} <Recycle/> </p>
       </div> 
       <div className='weatherParameters'>
        <p>Temperature: {weather.main.temp} <ThermometerHalf className='sectionIcon-alt' /> </p>
        <p>Feels Like: {weather.main.feels_like} <EmojiSmile className='sectionIcon-alt' /> </p>
        <p>Humidity: {weather.main.humidity} <Moisture className='sectionIcon-alt' /> </p>
        {/* <img src={image.urls.small} alt={image.alt_description} width={100} height={100} /> */}
      </div>
      </div>
    )
}

export default WeatherApp;