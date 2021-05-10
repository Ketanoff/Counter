import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from './SettingMonitor.module.css';
import {Button} from '../../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';

type SettingsMonitorPropsType = {
    setMaxNumber: (value: number) => void
    setMinNumber: (value: number) => void
    setResetNumber: (value: number) => void
    setCount: (value: number) => void
    maxNumber: number
    minNumber: number
}

function SettingMonitor () {
    
    const minNum = useSelector<StateType, number>(state => state.countDisplay.minNum);
    const maxNum = useSelector<StateType, number>(state => state.countDisplay.maxNum);
    const minInputNum = useSelector<StateType, number>(state => state.countDisplay.maxNum);
    const maxInputNum = useSelector<StateType, number>(state => state.countDisplay.maxNum);
    
    const dispatch = useDispatch();
    
    
    // let initialMinValue = props.minNumber;
    // let initialMaxValue = props.maxNumber;
    //
    // let [maxInputNumber, setInputMaxNumber] = useState(initialMaxValue);
    // let [minInputNumber, setInputMinNumber] = useState(initialMinValue);
    //
    // useEffect(() => {
    //     let newMaxCounterValue = localStorage.getItem('maxCounterValue');
    //     if (newMaxCounterValue) {
    //         let newMaxInputNumber = JSON.parse(newMaxCounterValue);
    //         setInputMaxNumber(newMaxInputNumber);
    //         let newInitialCounterValue = localStorage.getItem('initialCounterValue');
    //         if (newInitialCounterValue) {
    //             let newMinInputNumber = JSON.parse(newInitialCounterValue);
    //             setInputMinNumber(newMinInputNumber);
    //         }
    //     }
    // }, []);
    //
    // const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     let newMaxValue = e.target.value;
    //     setInputMaxNumber(+newMaxValue);
    // };
    //
    // const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     let newStartValue = e.target.value;
    //     setInputMinNumber(+newStartValue);
    // };
    //
    // const setSetting = () => {
    //     props.setMinNumber(minInputNumber);
    //     props.setMaxNumber(maxInputNumber);
    //     props.setCount(minInputNumber);
    //     props.setResetNumber(minInputNumber);
    // };
    
    let inputErrorInitialStyle = {
        backgroundColor: minInputNum >= maxInputNum || minInputNum < 0 ? 'lightcoral' : ''
    };
    
    let resetInputErrorStyle = {
        backgroundColor: ''
    };
    
    let initialStyle = minInputNum < maxInputNum && minInputNum > 0
        ? resetInputErrorStyle : inputErrorInitialStyle;
    
    let inputErrorMaxStyle = useCallback(() => ({
        backgroundColor: minInputNum >= maxInputNum || maxInputNum < 0 ? 'lightcoral' : ''
    }), [maxInputNum]);
    
    let maxStyle = minInputNum < maxInputNum && maxInputNum > 0
        ? resetInputErrorStyle : inputErrorMaxStyle;
    
    const errorMessageHideStyle = {
        display: minInputNum >= maxInputNum || minInputNum < 0 ? '' : 'none'
    };
    
    return (
        <div className={s.monitor}>
            {/*<div className={s.counter}>*/}
            {/*    <input style={maxStyle} value={maxInputNum}*/}
            {/*           className={s.input1} type='number'*/}
            {/*           onChange={changeMaxValue}*/}
            {/*    />*/}
            {/*    <input style={initialStyle} value={minInputNum}*/}
            {/*           className={s.input2} type='number'*/}
            {/*           onChange={changeStartValue}*/}
            {/*    />*/}
            {/*    <p className={s.text1}>Initial value :</p>*/}
            {/*    <p className={s.text2}>Max value :</p>*/}
            {/*    <p style={errorMessageHideStyle} className={s.errorMessage}>incorrect value</p>*/}
            {/*</div>*/}
            {/*<div className={s.buttonBlock}>*/}
            {/*    <Button onClickButton={setSetting} title={'Set'}*/}
            {/*            disableButton={minInputNum >= maxInputNum || minInputNum < 0}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
}

export default SettingMonitor;
