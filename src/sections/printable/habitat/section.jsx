import Card from "./Card";

function HabitatSection({ data } = props) {
    return (
        <div className={`relative flex flex-row ${data.size} bg-gray-200 w-fit gap-1 mx-2 border-2 ${data.borderColor} rounded-2xl p-1`}>
            <div className={`relative bg-white border-4 ${data.borderColor} rounded-4xl -left-8 size-12 self-center -mr-8 overflow-hidden`}>
                <img src={data.icon} className="size-10" />
            </div>
            {data.annotation && <p className={`absolute text-[9px] line-clamp-1 -bottom-1 bg-white border-2 ${data.borderColor} rounded-4xl w-fit -left-8 px-2 z-10`}>
                {data.annotation}
            </p>}
            {data.spawns.map((pokemon) => (<Card key={pokemon.name} pokemon={pokemon} />))}
        </div>
    );
}

export default HabitatSection
