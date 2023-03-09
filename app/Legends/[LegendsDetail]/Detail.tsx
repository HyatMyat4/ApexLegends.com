import React from 'react'
import { LEGENDSDETAIL } from '../../../constants'
import Detail1 from './Detail1'
import Detail2 from './Detail2'
import Detail3 from './Detail3'
import Detail4 from './Detail4'
import Detail5 from './Detail5'
type  PageProps = {
    id : string
}
function Detail({id} : PageProps) {
    const data = LEGENDSDETAIL.filter(data => data.NAME.toLowerCase() === id)
    console.log(data),'🍔🍔'
  return (
    <>{data.map(data => (   
    <div key={id} id="monospace" className='w-full h-auto'>
         <Detail1 data={data}/>
         <Detail2 data={data}/> 
         <Detail3 data={data}/>
         <Detail4 data={data}/>
         <Detail5 />
    </div>
     ))}</>
  )
}

export default Detail
