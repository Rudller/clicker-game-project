import { useState } from 'react'
import ProgressBar from './Components/ProgressBar'
import Vault from './Components/Vault'
import './App.scss'
import Build from './Components/Build'
import Market from './Components/Market'

function App() {
  //Workers
  const [workers, setWorkers] = useState(10)
  const handleWorkersChange = (newWorkersValue: number) => {setWorkers(newWorkersValue)}

  //Coins
  const [coins, setCoins] = useState(0)
  const handleCoinsChange = (newCoinsValue: number) => {setCoins(newCoinsValue)}

  //Wood
  const [wood, setWood] = useState(0)
  const handleWoodChange = (newWoodValue: number) => {setWood(newWoodValue)}

  //Stone
  const [quarryIsBuild, setQuarryIsBuild] = useState(false)
  const handleQuarryChange = (newQuarryValue: boolean) => {setQuarryIsBuild(newQuarryValue)}
  const [stone, setStone] = useState(0)
  const handleStoneChange = (newStoneValue: number) => {setStone(newStoneValue)}

  return (
    <>
      <Vault coins={coins} wood={wood} stone={stone} workers={workers}/>
      <div className='resourcesConteiner'>
        <h1>Resources</h1>
        <ProgressBar 
          title="Wood 🪵" 
          item={wood} 
          onItemChange={handleWoodChange}
          workers={workers}
          onWorkersChange={handleWorkersChange}
        />
        {quarryIsBuild && <ProgressBar 
          title="Stone 🪨" 
          item={stone} 
          onItemChange={handleStoneChange}
          workers={workers}
          onWorkersChange={handleWorkersChange}
        />}
      </div>
      <Build 
        wood={wood}
        onWoodChange={handleWoodChange}
        isQuarryBuild={quarryIsBuild}
        onQuarryBuildChange={handleQuarryChange}
        // stone={stone}
        // onStoneChange={handleStoneChange}
        workers={workers}
        onWorkersChange={handleWorkersChange}
      />
      <Market 
        wood={wood}
        onWoodChange={handleWoodChange}
        isQuarryBuild={quarryIsBuild}
        //onQuarryBuildChange={handleQuarryChange}
        stone={stone}
        onStoneChange={handleStoneChange}
        coins={coins}
        onCoinsChange={handleCoinsChange}
      />
    </>
  )
}

export default App
