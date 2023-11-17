import './App.css'
import { NamasteBharat } from "./Components/01CheckFunctionalComponent";
import NamasteIndia from "./Components/02CheckClassComponent";
import HelloFolks from "./Components/03HelloFolks";
import CheckProps from "./Components/04Props";

function App() {

  return (
    <>
       <div className="App">
      {/* <NamasteBharat/> */}
      {/* <NamasteIndia/> */}
      {/* <HelloFolks/> */}
      <CheckProps name= 'Chetan' surName='Sharma'/>
      <CheckProps name= 'Ravi' surName='Suthar'/>
      <CheckProps name= 'Frank' surName='Patel'/>
    </div>
    </>
  )
}

export default App
