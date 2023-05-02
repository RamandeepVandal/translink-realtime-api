import React from 'react'

export const StopInfo = ({ stopEstimate }) => {
  return (
    <div className='card text-left mt-3 p-3'>
        <h1>Bus Arrival Time</h1>
        <p><span style={{fontWeight: 'bold'}}>Route Number:</span> {stopEstimate?.children[0]?.children[0].value}</p>
        <p><span style={{fontWeight: 'bold'}}>Destination:</span> {stopEstimate?.children[0]?.children[4]?.children[0].children[1].value}</p>
        <p><span style={{fontWeight: 'bold'}}>Expected Leave Time:</span> {stopEstimate?.children[0]?.children[4]?.children[0].children[2].value}</p>
        <p><span style={{fontWeight: 'bold'}}>Expected Time Left:</span> {stopEstimate?.children[0]?.children[4]?.children[0].children[3].value} mins</p>
    </div>
  )
}
