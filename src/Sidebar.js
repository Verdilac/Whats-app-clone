import { Avatar } from "@material-ui/core";
import React from 'react';
import './Sidebar.css';
import  DonutLargeIcon  from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar() {
    return (
        <div className ='sidebar'>
        <div className='sidebar__header'>
            <Avatar />
        <div className ='sidebar__headerRight'>
            <DonutLargeIcon /> 
            <ChatIcon />
            <MoreVertIcon />
        </div>

        </div>

        <div className='sidebar__search'>

        </div>

        <div className='sidebar__chat'>

        </div>

        

        
        
            
        </div>
    )
}

export default Sidebar

