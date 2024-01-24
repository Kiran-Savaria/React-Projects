import { useEffect } from 'react';
import '../App.css';
import { useState } from 'react';

function ChangeBackground() {
    const [color, setColor] = useState("#ffffff");

    const handleClick = () => {
        const randomColor = "#" + Math.random().toString(16).slice(2,8);
        setColor(randomColor);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    return(
        <div className='body'>
            <button className='btn-rounded' onClick={handleClick}>Change Background</button>
            <h4 className='btn-rounded'>The Current Background Color is {color}</h4>
        </div>

        
    );
}

export default ChangeBackground;