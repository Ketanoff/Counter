import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from './SettingMonitor.module.css';
import {Button} from '../../Button/Button';

type SettingsMonitorPropsType = {
    setMaxNumber: (value: string) => void
    setMinNumber: (value: string) => void
    setResetNumber: (value: string) => void
    setCount: (value: string) => void
    maxNumber: string
    minNumber: string
}

function SettingMonitor (props: SettingsMonitorPropsType) {
    
    let initialMinValue = props.minNumber;
    let initialMaxValue = props.maxNumber;
    
    let [maxInputNumber, setInputMaxNumber] = useState<string>(initialMaxValue);
    let [minInputNumber, setInputMinNumber] = useState<string>(initialMinValue);
    
    useEffect(() => {
        let newMaxCounterValue = localStorage.getItem('maxCounterValue');
        if (newMaxCounterValue) {
            maxInputNumber = JSON.parse(newMaxCounterValue);
            setInputMaxNumber(maxInputNumber);
            let newInitialCounterValue = localStorage.getItem('initialCounterValue');
            if (newInitialCounterValue) {
                minInputNumber = JSON.parse(newInitialCounterValue);
                setInputMinNumber(minInputNumber);
            }
        }
    }, []);
    
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.target.value;
        setInputMaxNumber(newMaxValue);
    };
    
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = e.target.value;
        setInputMinNumber(newStartValue);
    };
    
    const setSetting = () => {
        props.setMinNumber(minInputNumber);
        props.setMaxNumber(maxInputNumber);
        props.setCount(minInputNumber);
        props.setResetNumber(minInputNumber);
    };
    
    const inputErrorInitialStyle = useCallback(() => ({
        backgroundColor: +minInputNumber >= +maxInputNumber || +minInputNumber < 0 ? 'lightcoral' : ''
    }), [minInputNumber]);
    
    let inputErrorMaxStyle = useCallback(() => ({
        backgroundColor: +minInputNumber >= +maxInputNumber || +maxInputNumber < 0 ? 'lightcoral' : ''
    }), [maxInputNumber]);
    
    const errorMessageHideStyle = {
        display: +minInputNumber >= +maxInputNumber || +minInputNumber < 0 ? '' : 'none'
    };
    
    return (
        <div className={s.monitor}>
            <div className={s.counter}>
                <input style={inputErrorMaxStyle()} value={maxInputNumber}
                       className={s.input1} type='number'
                       onChange={changeMaxValue}
                />
                <input style={inputErrorInitialStyle()} value={minInputNumber}
                       className={s.input2} type='number'
                       onChange={changeStartValue}
                />
                <p className={s.text1}>Initial value :</p>
                <p className={s.text2}>Max value :</p>
                <p style={errorMessageHideStyle} className={s.errorMessage}>incorrect value</p>
            </div>
            <div className={s.buttonBlock}>
                <Button onClickButton={setSetting} title={'Set'}
                        disableButton={+minInputNumber >= +maxInputNumber || +minInputNumber < 0}
                />
            </div>
        </div>
    );
}

export default SettingMonitor;
