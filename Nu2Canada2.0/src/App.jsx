import React from 'react'
import Landing from './components/Landing'
import Services from './components/Services'
import Service2 from './components/Service2'
import Service3 from './components/Service3'
import Schools from './components/Schools'

function App() {
  return (
   <div className='scroll-smooth relative'>
    <div className='pt-3 shadow-xl rounded-3xl relative'>
    <Landing/>
    </div>
    <div className='pt-3 shadow-xl rounded-3xl relative'>
    <Schools />
    </div>
    <div className='pt-3 shadow-xl rounded-3xl relative'>
    <Service2/>
    </div>
    <div className='pt-3 shadow-xl rounded-3xl relative'>
    <Service3/>
    </div>
    <div className='pt-3 pb-3 rounded-3xl relative'>
    <Services/>
    </div>
   </div>
  )
}

export default App
