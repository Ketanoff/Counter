import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from './SettingMonitor.module.css';
import {Button} from '../../Button/Button';
import {CounterMonitor} from '../CounterMonitor/CounterMonitor';

type SettingsMonitorPropsType = {
    setMaxNumber: (value: number) => void
    setMinNumber: (value: number) => void
    setResetNumber: (value: number) => void
    setCount: (value: string) => void
    reset: () => void
    counter: () => void
    maxNumber: number
    minNumber: number
    resetNumber: number
    count: string
}

function SettingMonitor (props: SettingsMonitorPropsType) {
    
    let [minInputNumber, setInputMinNumber] = useState(0);
    let [maxInputNumber, setInputMaxNumber] = useState(0);
    let [disableSetButton, setDisableSetButton] = useState(true);
    let [disableCountButton, setDisableCountButton] = useState(false);
    let [disableResetButton, setDisableResetButton] = useState(false);
    
    useEffect(() => {
        let newMaxCounterValue = localStorage.getItem('maxCounterValue');
        if (newMaxCounterValue) {
            let newMaxInputNumber = JSON.parse(newMaxCounterValue);
            setInputMaxNumber(newMaxInputNumber);
            let newInitialCounterValue = localStorage.getItem('initialCounterValue');
            if (newInitialCounterValue) {
                let newMinInputNumber = JSON.parse(newInitialCounterValue);
                setInputMinNumber(newMinInputNumber);
            }
        }
    }, []);
    
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.target.value;
        setInputMaxNumber(+newMaxValue);
    };
    
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = e.target.value;
        setInputMinNumber(+newStartValue);
    };
    
    let ofDisableSetButton = () => {
        setDisableSetButton(false);
        setDisableCountButton(true);
        setDisableResetButton(true);
        minInputNumber >= maxInputNumber || minInputNumber < 0 ?
            props.setCount('Value Error') : props.setCount('Inter Value');
    };
    
    const setSetting = () => {
        props.setMinNumber(minInputNumber);
        props.setMaxNumber(maxInputNumber);
        props.setCount(minInputNumber.toString());
        props.setResetNumber(minInputNumber);
        setDisableSetButton(true);
        setDisableCountButton(false);
        setDisableResetButton(false);
    };
    
    let changeDisableSetButton = disableSetButton || minInputNumber >= maxInputNumber
        || minInputNumber < 0;
    
    let resetInputErrorStyle = {
        backgroundColor: ''
    };
    
    let inputErrorInitialStyle = {
        backgroundColor: minInputNumber >= maxInputNumber || minInputNumber < 0 ?
            'lightcoral' : ''
    };
    
    let initialStyle = minInputNumber < maxInputNumber && minInputNumber > 0
        ? resetInputErrorStyle : inputErrorInitialStyle;
    
    let inputErrorMaxStyle = {
        backgroundColor: minInputNumber >= maxInputNumber || maxInputNumber < 0 ?
            'lightcoral' : ''
    };
    
    let maxStyle = minInputNumber < maxInputNumber && maxInputNumber > 0 ?
        resetInputErrorStyle : inputErrorMaxStyle;
    
    const errorMessageHideStyle = {
        display: minInputNumber >= maxInputNumber || minInputNumber < 0 ?
            '' : 'none'
    };
    
    return <>
        <div className={s.monitor}>
            <div className={s.counter}>
                <input style={maxStyle} value={maxInputNumber}
                       className={s.input1} type='number'
                       onChange={changeMaxValue} onClick={ofDisableSetButton}
                />
                <input style={initialStyle} value={minInputNumber}
                       className={s.input2} type='number'
                       onChange={changeStartValue} onClick={ofDisableSetButton}
                />
                <p className={s.text1}>Initial value :</p>
                <p className={s.text2}>Max value :</p>
                <p style={errorMessageHideStyle} className={s.errorMessage}>incorrect value</p>
            </div>
            <div className={s.buttonBlock}>
                <Button onClickButton={setSetting} title={'Set'}
                        disableButton={changeDisableSetButton}
                />
            </div>
        </div>
        <CounterMonitor counter={props.counter} count={props.count} setCount={props.setCount}
                        minNumber={props.minNumber} maxNumber={props.maxNumber} reset={props.reset}
                        resetNumber={props.resetNumber} disableCountButton={disableCountButton}
                        disableResetButton={disableResetButton}
                        setDisableCountButton={setDisableCountButton}
                        setDisableResetButton={setDisableResetButton}
        />
    </>;
}

export default SettingMonitor;
