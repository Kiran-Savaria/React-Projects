import '../App.css';
import { useState } from 'react';

export default function Postcard(){

    const [data, setData] = useState();
    const [userInput,setUserInput] = useState();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput) return;
    
        async function fetchData() {
          const result = await fetch(
            `https://api.postalpincode.in/pincode/${userInput}`
          );
          const res = await result.json();
          setData(res[0].Status);
        }
        fetchData();
      };

    return(
        <div>
            <form>
                <input value={userInput} onChange={(e) => setUserInput(e.target.value)} label="Search User" />
                <input type='submit' value='submit' onClick={handleSubmit} ></input>
            </form>

            <p>{data}</p>

        </div>
       
    )
};