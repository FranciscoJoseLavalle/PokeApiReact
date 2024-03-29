
import { Stat } from '../Stat/Stat';

export const Stats = ({ pokemon }) => {
    return (
        <div className='pokemon__stats'>
            {pokemon.stats.map((stat, i) => (
                <Stat key={i} stat={stat} />
            ))}
        </div>
    )
}
