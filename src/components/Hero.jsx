import React from 'react'
import Flip from 'react-reveal/Flip';

export const Hero = () => { 
    return (
        <div className="hero position-relative">
            <div className="position-absolute top-50 start-50 translate-middle text-center">
            <Flip top>
                <h1>Virtual Dreams</h1>
            </Flip>
            <Flip bottom>
                <p>Te llevamos a una realidad mejorada</p>
            </Flip>
            </div>
        </div>
    )
  }