import React from 'react'
import Header from './(Header)/Header'
import SecondHeader from './(Header)/SecondHeader'
import WatchVideo from './WatchVideo'
import Session from './Session'
function page() {
  return (
    <div  className=''>        
        <WatchVideo/>
        <Header/>
        <SecondHeader/>
        <Session/>
    </div>
  )
}

export default page