export const Types = ({ pokemon }) => {
    return (
        <div className='pokemon__types'>
            {pokemon.types.map(type => (
                <div key={type.type.name}>{type.type.name}</div>
            ))}
        </div>
    )
}
