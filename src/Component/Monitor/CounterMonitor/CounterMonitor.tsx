import React from 'react';
import {Button} from '../../Button/Button';
import s from './CounterMonitor.module.css';

type MonitorPropsType = {
    count: number
    resetNumber: string
    maxNumber: string
    minNumber: string
    reset: () => void
    counter: () => void
    setCount: (value: string) => void
}

export function CounterMonitor (props: MonitorPropsType) {
    
    const monitorStyle = {
        color: props.count >= +props.maxNumber ? 'red' : ''
    };
    
    return <div style={monitorStyle} className={s.monitor}>
        <div className={s.counter}>{props.count}</div>
        <div className={s.buttonBlock}>
            <Button onClickButton={props.counter} title={'Count'}
                    disableButton={+props.resetNumber === +props.maxNumber}
            />
            <Button onClickButton={props.reset} title={'Reset'}
                    disableButton={props.resetNumber === props.minNumber}
            />
        </div>
    </div>;
}