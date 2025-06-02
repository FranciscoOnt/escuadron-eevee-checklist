import { Accordion, AccordionItem } from "@heroui/react";
import ChecklistCard from "./checklistCard";
import incenseLogo from "../../assets/incense.webp"
import calendarLogo from "../../assets/calendar.svg"
import raidLogo from "../../assets/raid.png"

function Checklist({ featuredRaidBosses, eventHabitats, checks, checkCard }) {
    const bossProgress = Object.keys(checks).filter((check) => featuredRaidBosses.flatMap((boss) => boss.name).includes(check) && checks[check] == true).length

    return (
        <Accordion variant="bordered" selectionMode="multiple" className="bg-white">
            <AccordionItem key="0" textValue="Jefes de Incursión" title={
                <p className="flex justify-between font-bold">
                    Jefes de Incursión
                    <span className={`${bossProgress >= featuredRaidBosses.length ? "text-success-400" : "text-default-400"} text-small`}>
                        {bossProgress >= featuredRaidBosses.length ? "Completado!" : `${bossProgress} / ${featuredRaidBosses.length}`}
                    </span>
                </p>
            }
                startContent={<img src={raidLogo} className="size-8 object-scale-down mix-blend-multiply" />}>
                <div className="size-full grid grid-cols-3 gap-2 my-4">
                    {featuredRaidBosses.map((boss) => <ChecklistCard key={boss.name} {...boss} checks={checks} checkCard={checkCard} />)}
                </div>
            </AccordionItem>
            {eventHabitats.map((habitat, index) => {
                const habitatProgress = Object.keys(checks).filter((check) => habitat.spawns.flatMap((pkmn) => pkmn.name).includes(check) && checks[check] == true).length
                let useIcon = null;
                switch (habitat.icon) {
                    case "incense":
                        useIcon = incenseLogo;
                        break;
                    case "timed":
                        useIcon = calendarLogo;
                        break;
                    default:
                        useIcon = habitat.icon;
                        break;
                }

                return (
                    <AccordionItem key={index + 1} aria-label={habitat.name} title={
                        <p className="flex justify-between font-bold">
                            {habitat.name}
                            <span className={`${habitatProgress >= habitat.spawns.length ? "text-success-400" : "text-default-400"} text-small`}>
                                {habitatProgress >= habitat.spawns.length ? "Completado!" : `${habitatProgress} / ${habitat.spawns.length}`}
                            </span>
                        </p>
                    }
                        startContent={<img src={useIcon} className="size-8 object-scale-down mix-blend-multiply" />}>
                        <div className="size-full grid grid-cols-3 gap-2 my-4">
                            {habitat.spawns.map((pokemon) => <ChecklistCard key={pokemon.name} {...pokemon} checks={checks} checkCard={checkCard} />)}
                        </div>
                    </AccordionItem>
                )
            }
            )}
        </Accordion>
    );
}

export default Checklist


