import incenseLogo from "../../../assets/incense.webp"

function Card({ pokemon } = props) {
    return (
        <div>
            <div className={`grid relative border-none bg-gray-50 rounded-xl w-12 h-16 text-center justify-center content-center ${pokemon.spaceAfter ? "mr-4" : ""}`}>
                {pokemon.incenseBadge && <img className='absolute size-6 top-0 left-0 opacity-60' src={incenseLogo} />}
                <img src={pokemon.image} className='size-12 mix-blend-multiply' />
                {pokemon.footNote && <p className="absolute text-[9px] text-gray-700 bottom-0 w-full">{pokemon.footNote}</p>}
                {pokemon.sideNote && <p className="absolute rotate-270 text-[9px] border-t-1 border-gray-700 text-gray-700 -right-10 bottom-6 w-14">{pokemon.sideNote}</p>}
            </div>
        </div>
    )
}

export default Card
