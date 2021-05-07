import React, {ChangeEvent, useCallback, useEffect} from 'react';

type MonitorPropsType = {
    onClickButtonSetting: () => void
    value: boolean
    count: number
    maxNumber: string
    minNumber: string
    setCount: (value: string) => void
    setMaxNumber: (value: string) => void
    setMinNumber: (value: string) => void
}

export function Monitor (props: MonitorPropsType) {
    
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNumber(e.target.value);
    };
    
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinNumber(e.target.value);
        if (props.value === true) {
            props.setCount(e.target.value);
        }
    };
    const monitorStyle = {
        color: props.count >= +props.maxNumber ? 'red' : ''
    };
    const inputHideStyle = {
        display: props.value ? 'flex' : 'none'
    };
    
    const inputErrorInitialStyle = useCallback(() => ({
        backgroundColor: +props.minNumber >= +props.maxNumber || +props.minNumber < 0 ? 'lightcoral' : ''
    }), [props.minNumber]);
    
    let inputErrorMaxStyle = useCallback(() => ({
        backgroundColor: +props.minNumber >= +props.maxNumber || +props.maxNumber < 0 ? 'lightcoral' : ''
    }), [props.maxNumber]);
    
    const errorMessageHideStyle = {
        display: +props.minNumber >= +props.maxNumber || +props.minNumber < 0 ? '' : 'none'
    };
    
    return <div className='monitor'>
        <div style={monitorStyle} className='counter'>{props.count}</div>
        <div style={inputHideStyle} className='input'>
            <input style={inputErrorMaxStyle()} value={props.maxNumber}
                   className='input1' type='number'
                   onChange={changeMaxValue}
            />
            <input style={inputErrorInitialStyle()} value={props.minNumber}
                   className='input2' type='number'
                   onChange={changeStartValue}
            />
            <p className='text1'>Enter the Initial value</p>
            <p className='text2'>Enter the Max value</p>
            <p style={errorMessageHideStyle} className='errorMessage'>incorrect value</p>
        </div>
    </div>;
}