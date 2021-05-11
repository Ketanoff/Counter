import React, {useEffect, useState} from 'react';
import s from '../App.module.css';
import SettingMonitorWithRedux from './Component/Monitor/SettingMonitor/SettingsMonitorWithRedux';

function AppWithRedux () {
    
    return (
        <div className={s.app}>
            <SettingMonitorWithRedux/>
        </div>
    );
}

export default AppWithRedux;
