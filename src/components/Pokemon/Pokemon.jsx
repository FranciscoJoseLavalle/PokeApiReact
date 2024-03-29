import './Pokemon.css';
import { Stats } from '../Stats/Stats';
import { Types } from '../Types/Types';

export const Pokemon = ({ pokemon }) => {

    const makeCapitalLetter = (word) => {
        return `${word[0].toUpperCase()}${word.slice(1, word.length)}`
    }

    return (
        <div className="pokemon">
            <p className='pokemon__id'>#{pokemon.id}</p>
            <Types pokemon={pokemon} />
            <img src={pokemon.sprites.other.home.front_default} alt={`${pokemon.name} image`} width={"100%"} />
            <p className='pokemon__name'>{makeCapitalLetter(pokemon.name)}</p>
            <Stats pokemon={pokemon} />
        </div>
    )
}
