import React from 'react'
import Legands1 from './Legands1'
import Header from '../(Header)/Header'
import SecondHeader from '../(Header)/SecondHeader'
import Legends2 from './Legends2'
import Legends3 from './Legends3'
import Session7 from '../(Session)/Session7'
import Session8 from '../(Session)/Session8'
import Session9 from '../(Session)/Session9'
function page() {
  return (
    <div className='w-full h-[500px]  '>
        <Header/>
        <SecondHeader/>  
        <Legands1/>  
        <Legends2/>
        <Legends3/>
        <Session7/>
        <Session8/>
        <Session9/>
    </div>
  )
}

export default page