import React from 'react'
import Landing from './components/Landing'
import Services from './components/Services'
import Service2 from './components/Service2'
import Service3 from './components/Service3'
import Schools from './components/Schools'

function App() {

  return (
   <div className='bg-stone-900 scroll-smooth'>
    <div className='pt-2'>
    <Landing/>
    </div>
    <div className='pt-2'>
    <Schools />
    </div>
    <div className='pt-2'>
    <Service2/>
    </div>
    <div className='pt-2'>
    <Service3/>
    </div>
    <div className='pt-2 pb-3'>
    <Services/>
    </div>
   </div>
  )
}

export default App
