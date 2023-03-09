import React from 'react'
import Detail from './Detail'
import Header from '../../(Header)/Header'
import SecondHeader from '../../(Header)/SecondHeader'
type Props = {
    params : {
      LegendsDetail : string
    }
  }
function page({params : {LegendsDetail}} : Props) {
    const id = LegendsDetail.toLowerCase()  
  return (
    <div id='cutomscoll' className='w-full h-screen text-white overflow-x-hidden'>
       <Header/>
       <SecondHeader/>
      <Detail id={id}/>
    </div>
  )
}

export default page