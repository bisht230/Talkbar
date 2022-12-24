import React from 'react'
import { useDispatch } from 'react-redux'
import './SidebarChannel.css'

const SidebarChannel = ({id , channelName}) => {
  const dispatch = useDispatch();
  return (
    <div className='sidebarChannel'>
        <h4><span className='sidebar__channelHash'>#</span>{channelName}</h4>
        </div>
  )
}

export default SidebarChannel