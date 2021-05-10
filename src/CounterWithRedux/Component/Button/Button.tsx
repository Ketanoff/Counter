import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    onClickButton: () => void
    title: string
    disableButton: boolean
}

export function Button (props: ButtonPropsType) {
    
    return (
        <button className={s.buttonStyle}
                disabled={props.disableButton}
                onClick={props.onClickButton}>
            {props.title}
        </button>
    );
}
