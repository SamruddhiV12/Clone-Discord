import React from 'react';
import {useDispatch} from 'react-redux';
import {setChannelInfo} from './features/appSlice';
import './SidebarChannel.css';


function SidebarChannel({id, channelName}) {

    const dispatch = useDispatch();
    return (
        <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName:channelName,
        })
        )
    }
        >
           
            <h3>
                <span className="sidebarChannel__hash">#</span>
               {channelName}
            </h3>
            
        </div>
    )
}

export default SidebarChannel;
