import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainContainer from './MainContainer/MainContainer'
import ErrorContainer from './ErrorContainer/ErrorContainer'

function App() {
  const [currentError, setCurrentError] = useState("")

  return (
    <main className='App'>
      <h1>Tea Subscriptions Admin View - Welcome!</h1>
      <Routes>
        <Route path='/' element={<MainContainer isShowDetails={false} setCurrentError={setCurrentError}/>} />
        <Route path='/:subscription_id' element={<MainContainer isShowDetails={true} setCurrentError={setCurrentError} />} />
        <Route path='/error' element={<ErrorContainer currentError={currentError} />} />
      </Routes>
    </main>
  )
}

export default App
