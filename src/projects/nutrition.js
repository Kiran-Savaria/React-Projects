import { useEffect, useState } from 'react';
import '../App.css';
import persimmon from '../images/persimmon.jpeg'; 
import strawberry from '../images/strawberry.jpg'; 
import banana from '../images/banana.jpg'; 
import tomato from '../images/tomato.jpg'; 
import pear from '../images/pear.jpg'; 
import { CircleFill } from 'react-bootstrap-icons';


function NutritionData() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            const result = await fetch('https://www.fruityvice.com/api/fruit/all');
            const newData = await result.json();
            console.log(newData);
            setData(newData.slice(0,5));
        } 
        fetchData();
    },[])

    const handleImgSrc= (name) => {
        switch (name.toLowerCase()) {
            case 'persimmon': 
                return persimmon
            case 'strawberry':
                return strawberry
            case 'banana':
                return banana
            case 'tomato':
                return tomato
            case 'pear':
                return pear            
            default:
                return persimmon
        }
    }

    return(
        <div className='holder'>
            <div className='nutritionContainer' style={{ 
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            margin: '0 50px',
            gap:'20px'
            }}>
            { data.map((dataobj, index) => {
                return(
                            <div className='flags' style={{
                                minHeight: '50vh',
                                background:'maroon',
                                overflowY: 'hidden',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderRadius: '8px',
                                padding:'0',
                            }}>
                                <div className='overlay'
                                    style={{
                                        background: 'rgba(0,0,0,0.4)',
                                        minHeight:'50vh',
                                        content: "",
                                        width: '100%',
                                    }}
                                >
                                 <img src={handleImgSrc(dataobj.name)} alt='Persimmon' width={200} height={200} />
                                 <h2>{dataobj.name}</h2> 
                                 <p> 
                                    <CircleFill className='red' />  &nbsp;
                                    Carbohydrates: 
                                        <span>
                                            {dataobj.nutritions.carbohydrates} 
                                        <sup>g</sup>
                                        </span> 
                                </p> 
                                 <hr />
                                 <p> 
                                    <CircleFill className='yellow' />  &nbsp;
                                    Proteins:
                                    <span>
                                     {dataobj.nutritions.protein}
                                    <sup>g</sup>
                                    </span>
                                 </p> 
                                 <hr />
                                 <p> 
                                    <CircleFill className='green' />  &nbsp;
                                    Calories: 
                                    <span>
                                    {dataobj.nutritions.calories}
                                    <sup>kCal</sup>
                                    </span>
                                 </p> 
                                 <hr />
                                 <p>
                                    <CircleFill className='orange' /> &nbsp;
                                    Fat: 
                                    <span>
                                    
                                     {dataobj.nutritions.fat} 
                                    <sup>g</sup>
                                    </span>
                                 </p> 
                                 <hr />
                                 <p>
                                    <CircleFill className='purple' /> &nbsp;
                                    Sugar: 
                                    <span>
                                    
                                    {dataobj.nutritions.sugar} 
                                    <sup>g</sup>
                                    </span>
                                 </p> 
                                 <hr />
                               </div>
                            </div>
                )
            }) }
        </div>
        </div>
       
    );
}

export default NutritionData;