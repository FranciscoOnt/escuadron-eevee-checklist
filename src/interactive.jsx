import { useState } from 'react'
import RaidBossesSection from './sections/printable/raid/section'
import { fest2025 } from './eventData'
import HabitatSection from './sections/printable/habitat/section';

function InteractiveApp() {
  const eventData = fest2025;

  return (
    <div className='grid grid-cols-6  gap-2 px-16 bg-white overflow-clip'>
      <p className='col-span-6'>Hoja ineteractiva</p>
    </div>
  )
}

export default InteractiveApp
