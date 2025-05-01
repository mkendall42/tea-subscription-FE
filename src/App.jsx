import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainContainer from './MainContainer/MainContainer'
import MainAndDetailsContainer from './MainAndDetailsContainer/MainAndDetailsContainer'
import ErrorContainer from './ErrorContainer/ErrorContainer'

function App() {
  const [currentError, setCurrentError] = useState("")

  //I'm not sure how to handle /:subscription_id yet, given that I'm trying to house everything in MainContainer
  return (
    <main className='App'>
      <h1>Tea Subscriptions Admin View - Welcome!</h1>
      <Routes>
        <Route path='/' element={<MainContainer isShowDetails={false} setCurrentError={setCurrentError}/>} />
        {/* <Route path='/:subscription_id' element={<MainAndDetailsContainer />} /> */}
        <Route path='/:subscription_id' element={<MainContainer isShowDetails={true} />} />
        <Route path='/error' element={<ErrorContainer currentError={currentError} />} />
      </Routes>
    </main>
  )

  //Default config provided by Vite and React (mildly amusing)
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
