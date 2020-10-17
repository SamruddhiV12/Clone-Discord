import React from 'react';
import './Bar.css';
import { Avatar } from '@material-ui/core';

function Bar() {
    return (
        <div className="bar">
            <div className="bar__Top">
            <img src="https://wiki.faforever.com/images/e/e9/Discord-icon.png" height="40px" width="40px" alt="discord"/>
            </div>

            <div className="bar__Mid">
            <img src="https://wiki.faforever.com/images/e/e9/Discord-icon.png" height="40px" width="40px" alt="discord"/>
                <br></br>
                <img src="https://wiki.faforever.com/images/e/e9/Discord-icon.png" height="40px" width="40px" alt="discord"/>
                <br></br>
                <img src="https://wiki.faforever.com/images/e/e9/Discord-icon.png" height="40px" width="40px" alt="discord"/>
            </div>
           
        </div>
    )
}

export default Bar;
