import React, { useState } from 'react'
import Sensor from 'react-visibility-sensor'
import { TransitionWrapper } from './style'

const Animation = {
    fadeIn: ({children, offset, runEveryTime}) => {
        let [ count, setCount ] = useState(0);
        return (
            <Sensor 
            partialVisibility 
            offset={offset? offset : {top: -200, bottom: 300}} 
            onChange={(isVisible) => setCount(isVisible? count++ : count)}>
                {({isVisible}) =>
                    <TransitionWrapper
                        bool={count >= (runEveryTime? 100 : 1)? true : isVisible}
                        transition={'.7s ease-in-out'}
                        children={children}
                    />
                }
            </Sensor>
        )
    },
    slideIn: ({children, offset, runEveryTime, outAni, inAni}) => {
        let [ count, setCount ] = useState(0);
        let outAnimation = false;
        let inAnimation = {axis:'X', from: -3, to: 0};
        switch(outAni) {
            case 'right': outAnimation = {axis:'X', to: 10}; break;
            case 'left': outAnimation = {axis:'X', to: -10}; break;
            case 'up': outAnimation = {axis:'Y', to: -10}; break;
            case 'down': outAnimation = {axis:'Y', to: 10}; break;
            default: break; 
        }
        switch(inAni) {
            case 'right': inAnimation = {axis:'X', from: 3, to: 0}; break;
            case 'left': inAnimation = {axis:'X', from: -3, to: 0}; break;
            case 'up': inAnimation = {axis:'Y', from: -3, to: 0}; break;
            case 'down': inAnimation = {axis:'Y', from: 3, to: 0}; break;
            default: break; 
        }
        return (
            <Sensor 
            partialVisibility 
            offset={offset? offset : {top: -200, bottom: 300}} 
            onChange={(isVisible) => setCount(isVisible? count++ : count)}>
                {({isVisible}) => 
                    <TransitionWrapper
                        bool={count >= (runEveryTime? 100 : 1) ? true : isVisible}
                        transition={'.7s ease-in-out'}
                        children={children}
                        transform={inAnimation}
                        out={outAnimation}
                    />
                }
            </Sensor>
        )
    }
}

export default Animation
