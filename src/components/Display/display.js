import React, {Component} from 'react';

export default function({width=300, height=50 , color="#9eeb34"}){

    return(

        <div
            className="display"
            style={{
                width:`${width}px`,
                height:`${height}px`,
                backgroundColor:`${color}`,
                position:'fixed'
            }}
        >
        </div>
    );
}