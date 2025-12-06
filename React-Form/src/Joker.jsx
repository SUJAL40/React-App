import { use, useEffect, useState } from "react";

export default function Joker(){

    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/jokes/random";

    const getNewJoke = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setJoke({setup: data.setup, punchline: data.punchline});
    };

    useEffect(()=>{
        async function getFirstJoke(){
      
        let response = await fetch(URL);
        let data = await response.json();
        setJoke({setup: data.setup, punchline: data.punchline});
        }
        getFirstJoke();  
    },[]);

    return(
        <div>
            <h1>Joker Component</h1>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>Get a new joke</button>
        </div>
        
    )
}