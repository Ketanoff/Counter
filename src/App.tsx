import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {CounterMonitor} from './Component/Monitor/CounterMonitor/CounterMonitor';
import SettingMonitor from './Component/Monitor/SettingMonitor/SettingMonitor';

function App () {
    
    let initialMinValue = '0';
    let initialMaxValue = '5';
    
    let [minNumber, setMinNumber] = useState<string>(initialMinValue);
    let [maxNumber, setMaxNumber] = useState<string>(initialMaxValue);
    let [count, setCount] = useState<string>('0');
    let [resetNumber, setResetNumber] = useState<string>(minNumber);
    
    const counter = () => {
        if (+count < +maxNumber) {
            const newCount = +count + 1;
            setCount(newCount.toString());
            const newReset = (+resetNumber + 1);
            setResetNumber(newReset.toString());
        }
    };
    
    const reset = () => {
        if (+count !== +minNumber) {
            setCount(minNumber);
            setResetNumber(minNumber);
        }
    };
    
    useEffect(() => {
        let newMaxCounterValue = localStorage.getItem('maxCounterValue');
        if (newMaxCounterValue) {
            maxNumber = JSON.parse(newMaxCounterValue);
            setMaxNumber(maxNumber);
            let newInitialCounterValue = localStorage.getItem('initialCounterValue');
            if (newInitialCounterValue) {
                minNumber = JSON.parse(newInitialCounterValue);
                setMinNumber(minNumber);
                setCount(minNumber);
                setResetNumber(minNumber);
            }
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('maxCounterValue', maxNumber);
    }, [+maxNumber]);
    
    useEffect(() => {
        localStorage.setItem('initialCounterValue', minNumber);
    }, [+minNumber]);
    
    return (
        <div className={s.app}>
            <CounterMonitor count={+count} maxNumber={maxNumber} minNumber={minNumber}
                            setCount={setCount} counter={counter} reset={reset}
                            resetNumber={resetNumber}
            />
            <SettingMonitor setCount={setCount}
                            maxNumber={maxNumber} minNumber={minNumber}
                            setMaxNumber={setMaxNumber}
                            setMinNumber={setMinNumber}
                            setResetNumber={setResetNumber}
            />
        </div>
    );
}

export default App;
