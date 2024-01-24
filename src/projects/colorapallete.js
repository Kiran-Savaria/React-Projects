import '../App.css';
import { useState, useEffect } from 'react';



function ColorPallete() {
    
    const [color, setColor] = useState([]);

    useEffect(() =>{
        const fetchColorData = async() => {
            const result = await fetch('https://www.colourlovers.com/api/colors/new?format=json');
            const newData = await result.json();
            console.log(newData);
            setColor(newData);
        } 
        fetchColorData();
    },[])

    return(
        <div className='colorContainer'>
            <h4>Color Palletes</h4>
            <div className='colors'>
                {color.map((item, index) =>{
                    return(
                        <div className='colorCards' style={{ backgroundColor: `#${item.hex}`}}>
                            <p className='colorCard'>#{item.hex}
                                <span>{item.title}</span>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>

    );

}

export default ColorPallete;