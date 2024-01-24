import {  useState } from 'react';
import '../App.css';

function BibleVerse() {

    const [verse, setVerse] = useState();

    const handleClick = async () => {
        try {
            const fetchVerse = async () => {
                const result = await fetch('https://bible-api.com/?random=verse');
                const newVerse = await result.json();
                console.log(newVerse);
                setVerse(newVerse);
            } 
            fetchVerse();  
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <body className='bible'>
            <div className='bibleCards'>
                <h2 className='centered'>{verse?.reference}</h2>
                <div className='versePadding'>
                    {verse?.text}
                </div>
                <button onClick={handleClick}>Generate Verse</button>
            </div>
        </body>    
    )
}

export default BibleVerse;