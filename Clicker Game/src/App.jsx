import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import Vault from "./components/Vault"

function App() {

  return (
    <>
      <Header/>
      <Vault/>
      <ProgressBar resource="Wood"/>
    </>
  )
}

export default App
