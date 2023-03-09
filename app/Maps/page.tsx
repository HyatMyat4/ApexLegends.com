import React from 'react'
import Session1 from './Session1'
import Session2 from './Session2'
import Session3 from './Session3'
import Session7 from '../(Session)/Session7'
import Session8 from '../(Session)/Session8'
import Session9 from '../(Session)/Session9'
import Header from '../(Header)/Header'
import SecondHeader from '../(Header)/SecondHeader'
function page() {
  return (
    <div className='w-full h-auto'>
       <Header/>
       <SecondHeader/>
       <Session1/>
       <Session2/>
       <Session3/>
       <Session7/>
       <Session8/>
       <Session9/>
    </div>
  )
}

export default page