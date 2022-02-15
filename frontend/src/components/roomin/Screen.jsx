import styles from "./Room.module.css";
import ReactPlayer from "react-player";
import { useState } from "react";



function Screen ({mode, now}){
    
    function endMusic(){
        // alert(`곡 종료`)
        // nextMusic()
    }

    return (
        <div>
            <ReactPlayer 
            id={mode} 
            url={now}
            playing={true}
            muted={false}
            controls={true}
            onEnded={() => {endMusic()}}
            />
    {/* <button onClick={sendYTUrl}>연습버튼</button> */}
        </div>
    )

}

export default Screen