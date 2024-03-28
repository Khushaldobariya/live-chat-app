import React from 'react'
import Sidebar from '../Component/Sidebar'
import Messages from '../Component/Messages'
import Navbar from '../Component/Navbar'

const HomePage = () => {
  return (

    <div className="grid grid-cols-3 ">
    <div className="col-span-1">
      <Sidebar />
    </div>
    <div className="col-span-2 h-screen  overflow-scroll">
      <Messages />
    </div>
  </div>

  )
}

export default HomePage