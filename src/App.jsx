
import { Suspense } from 'react'
import './App.css'
import Daisynav from './assets/Componut/DaisyNav/Daisynav'
import Navber from './assets/Componut/Navber/Navber'
import PrichingOption from './assets/Componut/PrichingOption/PrichingOption'
import ResultChar from './assets/Componut/ResultChar/ResultChar'


const prichinPromise = fetch('prichingData.json').then(res => res.json());

function App() {


  return (
    <>
   <header>
    <Navber></Navber>
    {/* <Daisynav></Daisynav> */}

   </header>

   <main>
    <Suspense fallback={<span className="loading loading-spinner loading-sm"></span>}>
      <PrichingOption prichinPromise={prichinPromise}></PrichingOption>
    </Suspense>
    <ResultChar></ResultChar>

   </main>
     
     
     
      
    </>
  )
}

export default App
