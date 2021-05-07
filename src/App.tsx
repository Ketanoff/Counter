import React, {useEffect, useState} from 'react';
import './App.css';
import {Buttons} from './Buttons';
import {Monitor} from './Monitor';

function App () {
    let [count, setCount] = useState<string>('0');
    let [maxNumber, setMaxNumber] = useState<string>('5');
    let [minNumber, setMinNumber] = useState<string>('0');
    let [on, setOn] = useState<boolean>(false);
    
    const counter = () => {
        if (+count < +maxNumber) {
            const newCount = +count + 1;
            setCount(newCount.toString());
        }
    };
    
    const reset = () => {
        
        if (+count !== +minNumber) {
            setCount(minNumber);
        }
    };
    
    const changeSetting = () => {
        setOn(!on);
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
        <div className='App'>
            
            <Monitor count={+count} maxNumber={maxNumber} minNumber={minNumber}
                     onClickButtonSetting={changeSetting} value={on}
                     setCount={setCount}
                     setMaxNumber={setMaxNumber}
                     setMinNumber={setMinNumber}
            />
            
            <Buttons count={count}
                     onClickButtonReset={reset} onClickButtonCount={counter}
                     onClickButtonSetting={changeSetting} value={on}
                     maxNumber={maxNumber} minNumber={minNumber}/>
        </div>
    );
}

export default App;
