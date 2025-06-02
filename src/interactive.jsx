import { useEffect, useState } from 'react'
import { fest2025 } from './eventData'
import Header from './sections/interactive/header';
import ProgressCard from './sections/interactive/progress';
import Checklist from './sections/interactive/checklist'
import Footer from './sections/interactive/footer';

const playerNameKey = "playerName-data-key"

function InteractiveApp() {
  const eventData = fest2025;
  const [checks, setChecks] = useState({});
  const [playerName, setPlayerName] = useState(localStorage.getItem(playerNameKey) ?? "");

  const updatePlayer = (value) => {
    setPlayerName(value);
    localStorage.setItem(playerNameKey, value);
  }

  const checkCard = (key, value) => {
    const newChecks = {
      ...checks,
      [key]: value,
    };

    if (value === true) {
      localStorage.setItem(key, 1);
    } else {
      localStorage.removeItem(key)
    }

    setChecks(newChecks);
  };

  useEffect(() => {
    const checkData = {};
    eventData.sections.featuredRaidBosses.map((boss) => {
      const initialValue = localStorage.getItem(boss.name)
      checkData[boss.name] = initialValue === "1";
    });

    eventData.sections.eventHabitats.map((habitat) => {
      habitat.spawns.map((pokemon) => {
        const initialValue = localStorage.getItem(pokemon.name);
        checkData[pokemon.name] = initialValue === "1"
      })
    });

    console.log("Gathered Data =>", checkData)
    setChecks(checkData);
  }, [eventData])


  return (
    <div>
      <Header checks={checks} player={playerName} />
      <div className='flex flex-col size-full p-2 gap-4'>
        <ProgressCard
          checked={Object.values(checks).filter(value => value).length}
          total={Object.keys(checks).length}
          player={playerName}
          updatePlayer={updatePlayer}
        />
        <Checklist {...eventData.sections} checks={checks} checkCard={checkCard} />
        <Footer checks={checks} player={playerName} />
        <div className='h-16' />
      </div>

    </div>
  );
}

export default InteractiveApp
