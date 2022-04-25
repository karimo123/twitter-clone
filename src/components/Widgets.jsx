import React from 'react';
import "./widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
} from "react-twitter-embed"
import { Search } from '@mui/icons-material';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <Search className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1517484410341187585"} />
                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='elonmusk'
                    options={{ height: 400 }}
                />
                

            </div>
        </div>
    );
}

export default Widgets;
