import '../App.css';
import { useState, useEffect } from 'react';

function CountryFlag(){

    const [flagdata, setFlagData] = useState();

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/flag/images/')
        .then(result => result.json())
        .then( result => {
            console.log(result);
            setFlagData(result.data.slice(1,17))
        })
        .catch(error => console.log('Error',error))
    },[])

    return(
        <div className='flagContainer'>
            { flagdata?.map((dataobj, index) => {
                return(
                        <div className='flags'>
                            <img className='flagHolder' src={dataobj.flag} alt='Flag Image' />
                            <p>{dataobj.name}</p> 
                        </div>
                )
            }) }
        </div> 
    )
    
}

export default CountryFlag;