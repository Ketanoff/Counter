import React, {ChangeEvent} from 'react';
import s from './SettingMonitor.module.css';
import {Button} from '../../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';
import {CounterMonitorWithRedux} from '../CounterMonitor/CounterMonitorWithRedux';
import {changeDisableButtonsValue, revertDisableButtonsValue, setMaxInputValue, setMinInputValue} from '../../../redux/setting-reducer';
import {setCountSettings, setCountValueAC} from '../../../redux/counter-reducer';

function SettingMonitorWithRedux () {
    
    // const minNum = useSelector<StateType, number>(state => state.countDisplay.minNum);
    // const maxNum = useSelector<StateType, number>(state => state.countDisplay.maxNum);
    const minInputNum = useSelector<StateType, number>(state =>
        state.settingDisplay.minInputNum);
    const maxInputNum = useSelector<StateType, number>(state =>
        state.settingDisplay.maxInputNum);
    const disableSetButton = useSelector<StateType, boolean>(state =>
        state.settingDisplay.disableSetButton);
    const disableCountButton = useSelector<StateType, boolean>(state =>
        state.settingDisplay.disableCountButton);
    const disableResetButton = useSelector<StateType, boolean>(state =>
        state.settingDisplay.disableResetButton);
    
    const dispatch = useDispatch();
    
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.target.value;
        dispatch(setMaxInputValue(+newMaxValue));
    };
    
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = e.target.value;
        dispatch(setMinInputValue(+newStartValue));
    };
    
    let ofDisableSetButton = () => {
        dispatch(changeDisableButtonsValue(false, true,
            true));
        minInputNum >= maxInputNum || minInputNum < 0 ? dispatch(setCountValueAC('Value Error')) :
            dispatch(setCountValueAC('Inter Value'));
    };
    
    const setSetting = () => {
        dispatch(setCountSettings(minInputNum, minInputNum, minInputNum, maxInputNum));
        dispatch(revertDisableButtonsValue(disableSetButton, disableCountButton, disableResetButton));
    };
    
    let changeDisableSetButton = disableSetButton || minInputNum >= maxInputNum || minInputNum < 0;
    
    let resetInputErrorStyle = {
        backgroundColor: ''
    };
    
    let inputErrorInitialStyle = {
        backgroundColor: minInputNum >= maxInputNum || minInputNum < 0 ? 'lightcoral' : ''
    };
    
    let initialStyle = minInputNum < maxInputNum && minInputNum > 0 ? resetInputErrorStyle : inputErrorInitialStyle;
    
    let inputErrorMaxStyle = {
        backgroundColor: minInputNum >= maxInputNum || maxInputNum < 0 ? 'lightcoral' : ''
    };
    
    let maxStyle = minInputNum < maxInputNum && maxInputNum > 0 ? resetInputErrorStyle : inputErrorMaxStyle;
    
    const errorMessageHideStyle = {
        display: minInputNum >= maxInputNum || minInputNum < 0 ? '' : 'none'
    };
    
    return <>
        <div className={s.monitor}>
            <div className={s.counter}>
                <input style={maxStyle} value={maxInputNum} type='number'
                       className={s.input1} onChange={changeMaxValue}
                       onClick={ofDisableSetButton}
                />
                <input style={initialStyle} value={minInputNum} type='number'
                       className={s.input2} onChange={changeStartValue}
                       onClick={ofDisableSetButton}
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
        <CounterMonitorWithRedux/>
    </>;
}

export default SettingMonitorWithRedux;
