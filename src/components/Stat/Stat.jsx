import hp from '../../assets/icons/hearth.png';
import attack from '../../assets/icons/attack.png';
import defense from '../../assets/icons/shield.png';
import speed from '../../assets/icons/flash.png';

const images = {
    hp,
    attack,
    defense,
    speed
}

export const Stat = ({ stat }) => {
    return (
        <>
            {images[stat.stat.name]
                && <div>
                    <img src={images[stat.stat.name]} alt={stat.stat.name} width={30} height={30} />
                    <p>{stat.base_stat}</p>
                </div>
            }

        </>
    )
}
