import React from 'react';
import {Button} from '../../Button/Button';
import s from './CounterMonitor.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';
import {incValueAC, resetValueAC} from '../../../redux/counter-reducer';

// type MonitorPropsType = {
//     count: number
//     resetNumber: number
//     maxNumber: number
//     minNumber: number
//     reset: () => void
//     counter: () => void
//     setCount: (value: number) => void
// }

export function CounterMonitor () {
    
    const countNum = useSelector<StateType, number>(state => state.countDisplay.countNum);
    const resetCountNum = useSelector<StateType, number>(state => state.countDisplay.resetCountNum);
    const minNum = useSelector<StateType, number>(state => state.countDisplay.minNum);
    const maxNum = useSelector<StateType, number>(state => state.countDisplay.maxNum);
    
    const dispatch = useDispatch();
    
    const incHandler = () => {
        if (countNum < maxNum)
            dispatch(incValueAC(countNum));
    };
    
    const resetHandler = () => {
        dispatch(resetValueAC(minNum));
    };
    
    const monitorStyle = {
        color: countNum >= maxNum ? 'red' : ''
    };
    
    return <div style={monitorStyle} className={s.monitor}>
        <div className={s.counter}>{countNum}</div>
        <div className={s.buttonBlock}>
            <Button onClickButton={incHandler} title={'Count'}
                    disableButton={resetCountNum === maxNum}
            />
            <Button onClickButton={resetHandler} title={'Reset'}
                    disableButton={resetCountNum === minNum}
            />
        </div>
    </div>;
}