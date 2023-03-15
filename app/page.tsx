import React from 'react'
import Header from './(Header)/Header'
import SecondHeader from './(Header)/SecondHeader'
import WatchVideo from './WatchVideo'
import Session from './Session'
import Sidebar from './Sidebar'
function page() {
  return (
    <div  className=''>        
        <WatchVideo/>
        <Header/>        
        <SecondHeader/>
        <Sidebar/>
        <Session/>
    </div>
  )
}

export default page