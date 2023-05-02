import React from 'react'

export const BusActive = ({ listBuses }) => {
  return (
    <div className='text-left'>
        <h2>Active Buses</h2>
        <ol>
            <li>Bus No. {listBuses?.children[0]?.children[0]?.value}</li>
            <li>Bus No. {listBuses?.children[1]?.children[0]?.value}</li>
        </ol>
    </div>
  )
}
