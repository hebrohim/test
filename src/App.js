import React from 'react'
import CardDetails from './Components/CardDetails'
import TransactionDetails from './Components/TransactionDetails'
const App = () => {
  return (
    <div className='px-10 py-5 md:flex md:justify-between'>
      <CardDetails />
      <TransactionDetails/>
    </div>
  )
}

export default App