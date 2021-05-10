import React from 'react';
import {Button} from '../../Button/Button';
import s from './CounterMonitor.module.css';

type MonitorPropsType = {
    count: string
    resetNumber: number
    maxNumber: number
    minNumber: number
    reset: () => void
    counter: () => void
    setCount: (value: string) => void
    disableCountButton: boolean
    disableResetButton: boolean
    setDisableCountButton: (value: boolean) => void
    setDisableResetButton: (value: boolean) => void
}

export function CounterMonitor (props: MonitorPropsType) {
    
    let changeDisableCountButton = props.disableCountButton || props.resetNumber === props.maxNumber;
    let changeDisableResetButton = props.disableResetButton || props.resetNumber === props.minNumber;
    
    const monitorStyle = {
        color: props.resetNumber >= props.maxNumber || props.count === 'Value Error' ? 'red' : ''
    };
    
    return <div style={monitorStyle} className={s.monitor}>
        <div className={s.counter}>{props.count}</div>
        <div className={s.buttonBlock}>
            <Button onClickButton={props.counter} title={'Count'}
                    disableButton={changeDisableCountButton}
            />
            <Button onClickButton={props.reset} title={'Reset'}
                    disableButton={changeDisableResetButton}
            />
        </div>
    </div>;
}