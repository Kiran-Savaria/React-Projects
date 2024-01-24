import { useState } from 'react';
import '../App.css';

function AdviceGenerator(){

    const [advice, setAdvice] = useState({});

    const handleClick = async () => {
        try {
            const getAdvice = async () =>{
                const result = await fetch('https://api.adviceslip.com/advice');
                const res = await result.json();
                console.log(res);
                setAdvice(res);
            }
            getAdvice();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className='adviceContainer'>
            <h1>Advice Generator</h1>
            <h4>{advice.slip?.advice}</h4>
            <button className='btn-rounded advicebtn' onClick={handleClick}>New Advice</button>
        </div>
    );
}

export default AdviceGenerator;