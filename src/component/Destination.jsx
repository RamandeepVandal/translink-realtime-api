import React from 'react'
import { BusActive } from './BusActive'

export const Destination = ({ busData, showBusActive, listBuses }) => {
  return (
    <div className='card text-left mt-3 p-3'>
        <h1>Route Number: {busData?.children[0]?.value}</h1>
        <p>Destination 1: {busData?.children[3]?.children[0]?.children[1]?.value}</p>
        <p>Destination 2: {busData?.children[3]?.children[1]?.children[1]?.value}</p>
        {showBusActive ? <BusActive listBuses={listBuses} /> : null}
    </div>
  )
}
