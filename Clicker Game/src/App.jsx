import Build from "./components/Build";
import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import Vault from "./components/Vault"
import { useState } from 'react';

function App() {

  const [resources, setResources] = useState({
    workers: 10,
    wood: 0,
    stone: 0,
  })

  const handleResourceValueChange = (resourceName, newValue) => {
    setResources(prevResources => ({
      ...prevResources,
      [resourceName]: newValue,
    }));
  };

  const [isBuild, setIsBuild] = useState({
    house: {
      name: 'House',
      status: true,
    },
    quarry: {
      name: 'Quarry',
      status: false,
    },
  });

  const handleIsBuildChange = (buildingName, newValue) => {
    setIsBuild({
      ...isBuild,
      [buildingName]: newValue,
    });
  }

  return (
    <>
      <Header/>
      <Vault resources={resources}/>
      <Build 
        isBuild={isBuild} 
        handleIsBuildChange={handleIsBuildChange} 
        resources={resources}
        handleResourceValueChange={handleResourceValueChange}
      />
    {/* WOOD */}
      <ProgressBar 
        resourceName="Wood"
        resourceValue={resources.wood}
        handleResourceValue={handleResourceValueChange}
        workers={resources.workers}
      />
      {/* Stone */}
      {isBuild.quarry.status && 
      <ProgressBar 
        resourceName="Stone"
        resourceValue={resources.stone}
        handleResourceValue={handleResourceValueChange}
        workers={resources.workers}
      />}
    </>
  )
}

export default App
