import { createFileRoute } from '@tanstack/react-router'
import { EmployeeCard } from '@/components/EmployeeCard'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <EmployeeCard workname='Dasturchi' FullName='Ibrohim Zikrullaev' image='https://github.com/shadcn.png' hobbies='Football' age={13} />
      <EmployeeCard workname='Dasturchi' FullName='Abdunnur Musaxonov' image='/image/Abdunnur.jpg' hobbies='AI Creator Video' age={12} />
      <EmployeeCard workname='Dasturchi' FullName='Biloliddin Gayratov ' image='/image/bilol.jpg' hobbies='Football' age={14} />
      <EmployeeCard workname='Dasturchi' FullName='Ahmadjon Rahmadjonov' image='/image/Ahmadjon.jpg' hobbies='-' age={14} />
      <EmployeeCard workname='Dasturchi' FullName='MuhammadImron Doniyorov' image='/image/imron.jpg' hobbies='Roblox game' age={11} />
      <EmployeeCard workname='Dasturchi' FullName='Usmon Nurmuxamedov' image='/image/Usmon.jpg' hobbies='Play game' age={12} />
    </div>
  )
}
