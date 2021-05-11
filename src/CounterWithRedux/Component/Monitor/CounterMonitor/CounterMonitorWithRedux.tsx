import React from 'react';
import {Button} from '../../Button/Button';
import s from './CounterMonitor.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';
import {incValueAC, resetValueAC} from '../../../redux/counter-reducer';

export function CounterMonitorWithRedux () {
    
    const countValue = useSelector<StateType, number | string>
    (state => state.countDisplay.countValue);
    const resetCountNum = useSelector<StateType, number | string>
    (state => state.countDisplay.resetCountNum);
    const minNum = useSelector<StateType, number>(state => state.countDisplay.minNum);
    const maxNum = useSelector<StateType, number>(state => state.countDisplay.maxNum);
    const disableCountButton = useSelector<StateType, boolean>(state =>
        state.settingDisplay.disableCountButton);
    const disableResetButton = useSelector<StateType, boolean>(state =>
        state.settingDisplay.disableResetButton);
    
    const dispatch = useDispatch();
    
    const incHandler = () => {
        if (countValue < maxNum)
            dispatch(incValueAC());
    };
    
    const resetHandler = () => {
        dispatch(resetValueAC(minNum));
    };
    
    let changeDisableCountButton = disableCountButton || resetCountNum === maxNum;
    let changeDisableResetButton = disableResetButton || resetCountNum === minNum;
    
    const monitorStyle = {
        color: +countValue >= maxNum || countValue === 'Value Error' ? 'red' : ''
    };
    
    return <div style={monitorStyle} className={s.monitor}>
        <div className={s.counter}>{countValue}</div>
        <div className={s.buttonBlock}>
            <Button onClickButton={incHandler} title={'Count'}
                    disableButton={changeDisableCountButton}
            />
            <Button onClickButton={resetHandler} title={'Reset'}
                    disableButton={changeDisableResetButton}
            />
        </div>
    </div>;
}