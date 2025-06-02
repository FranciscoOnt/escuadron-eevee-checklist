import RaidBossesSection from './sections/printable/raid/section'
import { fest2025 } from './eventData'
import HabitatSection from './sections/printable/habitat/section';
import PrintableHeader from './sections/printable/header';

function PrintableApp() {
  const eventData = fest2025;

  return (
    <div className='grid grid-cols-6 gap-2 px-16 bg-white'>
      <PrintableHeader />
      <p className='col-span-6 text-sm w-full border-b-1 border-gray-200 pb-4 -mx-2'>No olvides hacer Check-In en Campfire para obtener recompenzas adicionales durante el evento!</p>
      <RaidBossesSection data={eventData.sections.featuredRaidBosses} />
      {eventData.sections.eventHabitats.map((habitat) => (<HabitatSection key={habitat.name} data={habitat} />))}
    </div>
  )
}

export default PrintableApp
