import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import Vault from "./components/Vault"
import { useState } from 'react';

function App() {
  // WORKERS
  const [workers, setWorkers] = useState(10);
  const handleWorkersValue = (newValue) => {setWorkers(newValue)}

  // WOOD
  const [wood, setWood] = useState(0);
  const handleWoodValue = (newValue) => {setWood(newValue)}

  return (
    <>
      <Header/>
      <Vault
        workers={workers}
        wood={wood}
      />
      {/* WOOD */}
      <ProgressBar 
        resourceName="Wood"
        resourceValue={wood}
        handleResourceValue={handleWoodValue}
        // Worekrs
        workers={workers}
        handleWorkersValue={handleWorkersValue}
      />
    </>
  )
}

export default App
