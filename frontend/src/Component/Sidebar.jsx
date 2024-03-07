import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Chat from './Chat'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className="border border-slate-500 flex flex-col p-4">
        <SearchInput />
        <div className='divider px-3'></div>
  
        <Chat />
        <Logout />
     </div>
  )
}

export default Sidebar