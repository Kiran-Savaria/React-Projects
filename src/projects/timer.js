import { useEffect, useState } from 'react';
import '../App.css';

const Timer = () => {

    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return() => clearInterval(intervalId);
    }, []);

    return(
        <div className='timerContainer'>
                <h1>Digital Clock in React</h1>
            <div className='timeholder'>
                <h1>{date.toLocaleTimeString()}</h1>
            </div>
        </div>
    )   
}

export default Timer;