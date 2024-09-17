import { Route, Routes } from "react-router-dom";
import Pokedex from "../Componenets/Pokedex/Pokedex";
import PokemonDetails from "../Componenets/PokemonDetails/PokemonDetails";
import PokemonList from "../Componenets/PokemonList/PokemonList";

function CustomRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Pokedex/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
            <Route path="/" exact component={PokemonList} />
        </Routes>
    )
}

export default CustomRoutes;