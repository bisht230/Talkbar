import React from 'react'
import './sideBar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@mui/material/Avatar';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <h3>TalkBar</h3>
            <ExpandMoreIcon />
        </div>
        <div className='sidebar__channels'>
            <div className='sidebar__channelsHeader'>
                <div className='sidebar__header'>
                    <ExpandMoreIcon />
                     <h3>Text Channel</h3>
                </div>
                <AddIcon className='sidebar__addChannel'></AddIcon>
            </div>
            <div className='sidebar__channelsList'>
               <SidebarChannel />
               <SidebarChannel />
               <SidebarChannel />
               <SidebarChannel />

        </div>
        </div>
        <div className='sidebar__voice'>
            <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large'></SignalCellularAltIcon>
            <div className='sidebar__voiceInfo'>
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className='sidebar__icons'>
                <InfoIcon  />
                <CallIcon  />
            </div>
        </div>
        <div className='sidebar__profile'>
           <Avatar src='https://avatars.githubusercontent.com/u/87183069?s=400&u=9d70fd1e9c34d491524bcdb33bc489f94f2330d7&v=4' />
           <div className='sidebar__profileInfo'>
             <h3>Deepanshu Bisht</h3>
             <p>#TestingId</p>
           </div>
           <div className='sidebar__profileIcons'>
               <KeyboardVoiceIcon />
               <HeadphonesIcon />
               <SettingsIcon />
           </div>
        </div>
    </div>
  )
}

export default Sidebar