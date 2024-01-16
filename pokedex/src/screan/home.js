import {useState, useEffect} from 'react'

const URL = "https://pokeapi.co/api/v2/generation"

function Home(props){

    const [generations, setGenerations] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    
    async function asyncLoadData() {

        const response = await fetch(URL);
        const data = await response.json();
        setGenerations(data.results);

        for(let number = 1 ; number < data.count + 1; number++ ){
            const response2 = await fetch(URL +"/"+number+"/");
            const data2 = await response2.json();
            
        }
        
    }

    useEffect(() => {asyncLoadData()}, [])
    

    if(generations && pokemons){
        for(let number = 1 ; number < generations.results + 1; number++ ){
           generations[number] = 

                                                /*{pokemons.map((pok)=>(
                                        <li>{pok.name}</li>
                                    ))                                  
                                    }*/
        }
            console.log(pokemons)
            return(
                <div>
                    {generations.map((generation)=>
                        (
                            <div>
                                <h2 id='generation.name'>{generation.name.toUpperCase()}</h2>
                                <ul>

                                </ul>
                            </div>
                        ))

                    }
                </div>
            );
        
    } else {
        <div>Chargement...en cours</div>
    }
}

export default Home