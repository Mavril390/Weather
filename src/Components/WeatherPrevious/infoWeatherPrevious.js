import React from 'react'
import { onLoad } from './apiWeatherPrevious' 

function InfoWeatherPrevius(){
    return(
        <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{justifyContent: "center", alignItems: "center", display: "flex"}}>
            <div style={{display: "flex", overflowX: "scroll"}}>
                <div onLoad={onLoad()} id="weatherP0" className="container"></div>
                <div onLoad={onLoad()} id="weatherP1" className="container"></div>
                <div onLoad={onLoad()} id="weatherP2" className="container"></div>
                <div onLoad={onLoad()} id="weatherP3" className="container"></div>
                <div onLoad={onLoad()} id="weatherP4" className="container"></div>
                <div onLoad={onLoad()} id="weatherP5" className="container"></div>
                <div onLoad={onLoad()} id="weatherP6" className="container"></div>
                <div onLoad={onLoad()} id="weatherP7" className="container"></div>
            </div>
        </div>
    )
}

export default InfoWeatherPrevius;