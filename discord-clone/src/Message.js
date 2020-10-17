import React from 'react'
import './Message.css';
import { Avatar } from '@material-ui/core'; 
/*  to be written in timestamp {new Date(timestamp?. toDate().toUTCString())}
{user.displayName}
*/
function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar src={user.photo} />

            <div className="message__info">
                <h4> Dead_Deed
                    <span className="message__timestamp">this is a timestamp </span>

                </h4>
                <p> {message}</p>
            </div>
        </div>
    )
}

export default Message;
