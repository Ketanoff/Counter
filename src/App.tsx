import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import SettingMonitor from './Component/Monitor/SettingMonitor/SettingMonitor';

function App () {
    
    const [minNumber, setMinNumber] = useState(0);
    const [maxNumber, setMaxNumber] = useState(5);
    let [count, setCount] = useState('0');
    const [resetNumber, setResetNumber] = useState(minNumber);
    
    const counter = () => {
        if (+count < maxNumber) {
            const newCount = +count + 1;
            setCount(newCount.toString());
            const newReset = (resetNumber + 1);
            setResetNumber(newReset);
        }
    };
    
    const reset = () => {
        if (+count !== minNumber) {
            setCount(minNumber.toString());
            setResetNumber(minNumber);
        }
    };
    
    useEffect(() => {
        let newMaxCounterValue = localStorage.getItem('maxCounterValue');
        if (newMaxCounterValue) {
            let newMaxNumber = JSON.parse(newMaxCounterValue);
            setMaxNumber(newMaxNumber);
            let newInitialCounterValue = localStorage.getItem('initialCounterValue');
            if (newInitialCounterValue) {
                let newMinNumber = JSON.parse(newInitialCounterValue);
                setMinNumber(newMinNumber);
                setCount(newMinNumber);
                setResetNumber(newMinNumber);
            }
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('maxCounterValue', JSON.stringify(maxNumber));
    }, [maxNumber]);
    
    useEffect(() => {
        localStorage.setItem('initialCounterValue', JSON.stringify(minNumber));
    }, [minNumber]);
    
    return (
        <div className={s.app}>
            <SettingMonitor setCount={setCount} count={count}
                            maxNumber={maxNumber} minNumber={minNumber}
                            setMaxNumber={setMaxNumber} setMinNumber={setMinNumber}
                            setResetNumber={setResetNumber} counter={counter} reset={reset}
                            resetNumber={resetNumber}
            />
        </div>
    );
}

export default App;
