import { useState } from 'react'
import List from './components/List'
import Chat from './components/Chat'
import Detail from './components/Detail'


function App() {

  return (
      <div className='  text-black bg-gray-300 border w-[86vw] h-[86vh] rounded-md border-2 border-white flex'>
        <List />
        <Chat />
        <Detail />
      </div>
  )
}

export default App
