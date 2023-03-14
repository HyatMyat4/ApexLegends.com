"use client"
import React from 'react'
import Session1 from './(Session)/Session1'
import Session2 from './(Session)/Session2'
import Session3 from './(Session)/Session3'
import Session4 from './(Session)/Session4'
import Session5 from './(Session)/Session5'
import Session6 from './(Session)/Session6'
import Session7 from './(Session)/Session7'
import Session8 from './(Session)/Session8'
import Session9 from './(Session)/Session9'
import { useSelector } from 'react-redux'
import { WatchGameplayC } from '../Redux/ActionSlice'
function Session() {
    const Hidden = useSelector(WatchGameplayC)
    console.log(Hidden)
  return (
    <div className={`${Hidden ? " hidden" : ""}`}>
        <div>
          <Session1/>
          <Session2/>
          <Session3/>
          <Session4/>
          <Session5/>
          <Session6/>
          <Session7/>
          <Session8/>
          <Session9/>
        </div>
    </div>
  )
}

export default Session