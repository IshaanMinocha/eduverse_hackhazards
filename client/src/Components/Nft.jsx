import React from 'react'
import Welcome from './Welcome'
import Transactions from './Transactions'

function Nft() {
  return (
    <>
      <div className='bg-slate-600'>
        <Welcome />
        <Transactions />
      </div>
    </>
  )
}

export default Nft