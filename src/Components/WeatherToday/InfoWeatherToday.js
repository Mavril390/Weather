import React from 'react'
import { onLoad } from './apiWeatherToday' 

function InfoWeatherToday(){
    return(
        <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            <div onLoad={onLoad()} className="weather container">
                <div>
                    <div id="location"></div>
                    <div id="date"></div>
                    <div className="weather__IconDes">
                        <div id="icon"></div>
                        <div id="description"></div>
                    </div>
                    <div id="temperature"></div>
                </div>
            </div>
        </div>
    )
}

export default InfoWeatherToday;