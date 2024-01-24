import { useEffect, useState } from 'react';
import '../App.css';

const Counter = () => {

    // const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 'Decmeber, 31, 2024';

    const getTime = () => {
        const time = Date.parse(deadline)- Date.now();
        console.log(time);
        
        setDays(Math.floor((time / (1000 * 60 * 60 * 24))));
        setHours(Math.floor((time / (1000 * 60 * 60) % 24)));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
        // console.log(days);
    }

    useEffect(()=>{
        const intervalId = setInterval(() => {
            getTime(deadline)

            return() => clearInterval(intervalId)
        }, 1000);
    }, []);


    return(
        <div className='counterContainer'>
                <h1>New Year starts in</h1>
            <div className='counterholder'>
                <h2>{days < 10 ? "0" + days : days} <sub>Days </sub> 
                : {hours < 10 ? "0" + hours : hours} <sub>Hours </sub> 
                : {minutes < 10 ? "0" + minutes : minutes} <sub>Minutes </sub> 
                : {seconds < 10 ? "0" + seconds : seconds} <sub>Seconds </sub> </h2>
            </div>
        </div>
    )   
}

export default Counter;