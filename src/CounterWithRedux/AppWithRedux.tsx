import React, {useEffect, useState} from 'react';
import s from '../App.module.css';
import {CounterMonitor} from '../CounterWithRedux/Component/Monitor/CounterMonitor/CounterMonitor';

function AppWithRedux () {
    
    return (
        <div className={s.app}>
            <CounterMonitor/>
        </div>
    );
}

export default AppWithRedux;
