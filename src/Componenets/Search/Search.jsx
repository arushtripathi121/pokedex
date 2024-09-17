import { useEffect, useState } from 'react';
import './Search.css'

function Search(){
    const [search, setSearch] = useState('');
    const [data, setData ]= useState([]);
    const onHandleChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }


    const fetchPokemon = async (search) => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        const res = data.json();
        console.log(res.Promise);
    }

    useEffect(() => {
        // Set up the timer
        const timer = setTimeout(() => {
            fetchPokemon(search);
        }, 300);
    
        // Clean up function to clear the timer if the component unmounts or `search` changes
        return () => clearTimeout(timer);
    }, [search]); // Depend on `search` so it runs whenever `search` changes
    
    return(
        <div className='search-wrapper'>
            <input 
            id='pokemonNameSearch' 
            type="text" 
            placeholder="Pokemon Name"
            onChange={(e) => onHandleChange (e)}>
            </input>
        </div>
    )
}

export default Search;