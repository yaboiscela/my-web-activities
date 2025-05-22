import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import Entry from './components/Entry'
import carData from './data/CarData'

function App() {

  const carElements = carData.map((car) => {
    return <Entry 
    key={car.id}
    {...car}
    />
  })

  return (
    <>
      <Header />
      {carElements}
    </>
  )
}

export default App
