import RaidBossCard from "./bossCard"

function RaidBossesSection({ data } = props) {
    return (
        <div className='grid grid-flow-col col-span-6 bg-gray-200 border-2 rounded-4xl w-fit gap-1 m-2 p-2 items-end'>
            <div className="relative bg-white border-2 rounded-4xl -left-8 size-12 self-center -mr-10 z-10">
                <img src="raid.png" className="size-12" />
            </div>
            {data.map((boss) => (<RaidBossCard key={boss.name} boss={boss} />))}
        </div>
    );
}

export default RaidBossesSection
