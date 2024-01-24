import '../App.css';
import { useState, useEffect } from 'react';

function FindIp() {

const [ip, setIP] = useState('');

useEffect(() => {
    const fetchIp = async () => {
        const result = await fetch('https://api.ipify.org?format=json');
        const res = await result.json();
        console.log(res);
        setIP(res);
    } 
    fetchIp(); 
}, [])

    return(
        <div className='ipContainer'>
            <h1>{ip.ip}</h1>
        </div>
    );
}

export default FindIp;