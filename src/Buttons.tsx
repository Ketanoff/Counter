import React from 'react';

type ButtonPropsType = {
    onClickButtonCount: () => void
    onClickButtonReset: () => void
    onClickButtonSetting: () => void
    count: string
    maxNumber: string
    minNumber: string
    value: boolean
}

export function Buttons (props: ButtonPropsType) {
    
    const hideButtonStyle = {
        display: props.value ? 'none' : ''
    };
    
    return (
        <div className='buttonBlock'>
            <div className='Count'>
                <button style={hideButtonStyle} className='buttonStyle'
                        disabled={+props.count === +props.maxNumber}
                        onClick={props.onClickButtonCount}>Count
                </button>
                <button style={hideButtonStyle} className='buttonStyle'
                        disabled={+props.count === +props.minNumber}
                        onClick={props.onClickButtonReset}>Reset
                </button>
                <div className='o'>i</div>
            </div>
            <div className='Setting'>
                <button className='buttonStyle'
                        onClick={props.onClickButtonSetting}
                        disabled={+props.minNumber >= +props.maxNumber || +props.minNumber < 0}
                >Setting
                </button>
            </div>
        </div>
    );
}
