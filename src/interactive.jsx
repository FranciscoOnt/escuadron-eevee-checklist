import { useEffect, useState } from 'react'
import { fest2025 } from './eventData'
import Header from './sections/interactive/header';
import ProgressCard from './sections/interactive/progress';
import Checklist from './sections/interactive/checklist'

function InteractiveApp() {
  const eventData = fest2025;
  const [checks, setChecks] = useState({});

  const checkCard = (key, value) => {
    const newChecks = {
      ...checks,
      [key]: value,
    };
    setChecks(newChecks);
    // console.log("Checked -> ", key, newChecks[key]);
  };

  useEffect(() => {
    const checkData = {};
    eventData.sections.featuredRaidBosses.map((boss) => {
      const initialValue = false; // TODO: Get from browser storage
      // console.log("Added boss entry -> ", boss.name, initialValue);
      checkData[boss.name] = initialValue
    });

    eventData.sections.eventHabitats.map((habitat) => {
      habitat.spawns.map((pokemon) => {
        const initialValue = false; // TODO: Get from browser storage
        // console.log("Added biome entry -> ", pokemon.name, initialValue);
        checkData[pokemon.name] = initialValue
      })
    });
    console.log("Gathered Data =>", checkData)
    setChecks(checkData);
  }, [eventData])


  return (
    <div>
      <Header />
      <div className='flex flex-col size-full p-2 gap-4'>
        <ProgressCard {...{ checked: Object.values(checks).filter(value => value).length, total: Object.keys(checks).length }} />
        <Checklist {...eventData.sections} checks={checks} checkCard={checkCard} />
      </div>

    </div>
  );
}

export default InteractiveApp
