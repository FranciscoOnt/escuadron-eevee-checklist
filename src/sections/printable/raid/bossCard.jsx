function RaidBossCard({ boss } = props) {
    return (
        <div>
            <div className={`grid relative border-4 ${boss.borderColor} bg-white rounded-3xl ${ boss.bigBox ? "size-28 p-2" : "size-20 items-center" } text-center justify-center`}>
                <img src={boss.image} className={`${ boss.bigBox ? "size-20" : "size-16" } mix-blend-multiply aspect-square`} />
                { boss.footNote && <p className="absolute text-[9px] text-gray-700 bottom-0 w-full">{boss.footNote}</p>}

            </div>
        </div>

    )
}

export default RaidBossCard
