/* eslint-disable no-unused-vars */
import React from 'react'

export default function Usage(props) {

    var sec = 0

    setInterval(function(){
        sec += 1
        var timer = [parseInt(sec/60), parseInt(sec%60)]
        if(timer[0] < 10) timer[0] = "0" + timer[0]
        if(timer[1] < 10) timer[1] = "0" + timer[1]
        document.getElementById('time').innerHTML = timer[0] + ":" + timer[1]
    }, 1000)

    return (
        <div className="usage">
            <div id="description">
                <img src="logo192.png"></img>
                <div>
                    <div className="lab">3SA03</div>
                    <div className="h-seperator">{'\u00A0'}</div>
                    <div className="std-id">6210110383</div>
                </div>
            </div>
            <div id="game-status">
                <div className="left">
                    <span>Attempt Left: </span>
                    <span>10</span>
                </div>
                <div className="right">
                    <span>Playtime: </span>
                    <span id="time">00:00</span>
                    <span> mins</span>
                </div>
            </div>
        </div>
    )
}