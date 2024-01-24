import '../App.css';
import { useState, useEffect } from 'react';

export default function Getimages() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async() => {
            const result = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            const res = await result.json();
            console.log(res);
            setImages(res);
        }
        fetchImages();
    },[])

    return(
        <div className='gridtemplate'>
            <div className=''>
                {images.map((item, index) => {
                    return(
                        <div className='second'>
                            <img src={item.url} width={item.width} height={item.height} />    
                        </div>
                    )
                })}
            </div>
        </div>   
    )
}