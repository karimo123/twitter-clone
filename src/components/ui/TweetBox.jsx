import { Avatar, Button } from '@mui/material';
import db from '../../firebase';
import React, { useState } from 'react';
import "./tweetbox.css"

const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault()
        db.collection("posts").add({
            displayName:"John Doe",
            username:"JohnDoe123",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar: "",

        })

        setTweetMessage("")
        setTweetImage("")

    }

    return (
        <div className='tweetBox'>
            <form action="">
                <div className="tweetBox__input">
                    <Avatar />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's Happening?"
                        type="" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    className='tweetBox__imageInput'
                    value={tweetImage}
                    placeholder="Optional: Enter Image Url"
                    type="" />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className='tweetBox__tweetButton'>
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default Tweetbox;
