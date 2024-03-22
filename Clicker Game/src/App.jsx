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
    ironore: 0,
    iron: 0,
    limestone: 0,
    concrete: 0,
    wheat: 0,
    flour: 0,
    bread: 0,
    water: 0,
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
    mine: {
      name: 'Mine',
      status: false,
    },
    farm: {
      name: 'Farm',
      status: false,
    },
    bakery: {
      name: 'Bakery',
      status: false,
    },
    waterWell: {
      name: 'Water Well',
      status: false,
    },
    mine: {
      name: 'Mine',
      status: false,
    },
    smelter: {
      name: 'Smelter',
      status: false,
    },
    limestoneMine: {
      name: 'Limestone Mine',
      status: false,
    },
    concreteFactory: {
      name: 'Concrete Factory',
      status: false,
    },
    }
  );

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
      {/* Iron Ore */}
      {isBuild.mine.status && 
        <ProgressBar 
          resourceName="IronOre"
          resourceValue={resources.ironore || 0} // Set a default value of 0 if resources.ironore is undefined or NaN
          handleResourceValue={handleResourceValueChange}
          workers={resources.workers}
        />}
      {/* Iron */}
      {isBuild.smelter.status && 
      <ProgressBar 
        resourceName="Iron"
        resourceValue={resources.iron}
        handleResourceValue={handleResourceValueChange}
        workers={resources.workers}
      />}
      {/* Limestone */}
      {isBuild.limestoneMine.status && 
      <ProgressBar 
        resourceName="Limestone"
        resourceValue={resources.limestone}
        handleResourceValue={handleResourceValueChange}
        workers={resources.workers}
      />}
    </>
  )
}

export default App
