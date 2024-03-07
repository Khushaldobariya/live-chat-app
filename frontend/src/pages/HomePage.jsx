import React from 'react'
import Sidebar from '../Component/Sidebar'
import Messages from '../Component/Messages'

const HomePage = () => {
  return (
    <div class="flex sm:h-[45px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <Messages />
    </div>
  )
}

export default HomePage