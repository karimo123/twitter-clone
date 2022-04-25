import React from 'react';
import "./sidebar.css"
import Sidebaroption from './ui/SideBarOption';
import {MailOutline,Search,Home,NotificationsNone,Twitter, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz} from '@mui/icons-material';
import { Button } from "@mui/material"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Twitter className='sidebar__twitterIcon'/>
            <Sidebaroption active Icon={Home} text="Home" />
            <Sidebaroption Icon={Search} text="Explore"/>
            <Sidebaroption Icon={NotificationsNone} text="Notifications"/>
            <Sidebaroption Icon={MailOutline} text="Messages"/>
            <Sidebaroption Icon={BookmarkBorder} text="Bookmarks"/>
            <Sidebaroption Icon={ListAlt} text="Lists"/>
            <Sidebaroption Icon={PermIdentity} text="Profile"/>
            <Sidebaroption Icon={MoreHoriz} text="More"/>
            <Button variant='outlined' className='sidebar__tweet' fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;
