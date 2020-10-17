import React from 'react'
import './Message.css';
import { Avatar } from '@material-ui/core'; 
/*  to be written in timestamp {new Date(timestamp?. toDate().toUTCString())}
{user.displayName}
*/
function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQE3y9f9rBa6YA/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=A7JW7L3i6ZNiBOthnVrvJOR_dPBm4iXiC5DYxkd-pck" />

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
