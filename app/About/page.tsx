import React from 'react'
import Header from '../(Header)/Header'
import SecondHeader from '../(Header)/SecondHeader'
import About1 from './About1'
import About2 from './About2'
import About3 from './About3'

function Page() {
  return (
    <div className='w-full h-auto'>
         <Header/>
        <SecondHeader/>  
        <About1/>
        <About2/>
        
        
  </div>
  )
}

export default Page