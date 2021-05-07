import React, {useState} from 'react';
import './Counter.css'
import {Buttons} from './Buttons';

type MonitorPropsType = {
    count: number
}

function Counter () {
    
    let [count, setCount] = useState<number>(0);
    let [value, setValue] = useState<boolean>(false)
    // let [value2, setValue2] = useState<boolean>(false)
    
    const counter = () => {
        if (count < 5)
            setCount(count + 1)
        setValue(value = false)
    }
    
    const reset = () => {
        if (count != 0)
            setCount(count = 0)
        if (count === 0)
            setValue(value = true)
    }
    
    return (
        <div className='counter'>
            
            {/*<Monitor count={count}/>*/}
            <span>
                {/*<Buttons counter={counter} count={count}/>*/}
            </span>
        
        </div>
    );
}

function Monitor (props: MonitorPropsType) {
    return <div>{props.count}</div>
}