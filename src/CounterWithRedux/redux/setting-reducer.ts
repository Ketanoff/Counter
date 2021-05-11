let initialState = {
    maxInputNum: 5,
    minInputNum: 0,
    disableSetButton: true,
    disableCountButton: false,
    disableResetButton: false
};

export type InitialSettingStateType = {
    maxInputNum: number
    minInputNum: number
    disableSetButton: boolean
    disableCountButton: boolean
    disableResetButton: boolean
}

export const settingReducer = (state: InitialSettingStateType = initialState, action: ActionType):
    InitialSettingStateType => {
    switch (action.type) {
        case 'SET-MIN-INPUT-VALUE': {
            return {...state, minInputNum: action.value};
        }
        case 'SET-MAX-INPUT-VALUE': {
            return {...state, maxInputNum: action.value};
        }
        case 'REVERT-DIS-BUTTON-VALUE': {
            return {
                ...state, disableCountButton: !action.countButtonValue,
                disableSetButton: !action.setButtonValue,
                disableResetButton: !action.resetButtonValue
            };
        }
        case 'CHANGE-DIS-BUTTON-VALUE': {
            return {
                ...state, disableCountButton: action.countButtonValue,
                disableSetButton: action.setButtonValue,
                disableResetButton: action.resetButtonValue
            };
        }
        default:
            return state;
    }
};

type ActionType = ReturnType<typeof setMinInputValue> |
    ReturnType<typeof setMaxInputValue> | ReturnType<typeof revertDisableButtonsValue> |
    ReturnType<typeof changeDisableButtonsValue>

export const setMinInputValue = (value: number) => ({type: 'SET-MIN-INPUT-VALUE', value} as const);
export const setMaxInputValue = (value: number) => ({type: 'SET-MAX-INPUT-VALUE', value} as const);
export const revertDisableButtonsValue = (setButtonValue: boolean, countButtonValue: boolean,
    resetButtonValue: boolean) => ({
    type: 'REVERT-DIS-BUTTON-VALUE',
    setButtonValue, countButtonValue, resetButtonValue
} as const);
export const changeDisableButtonsValue = (setButtonValue: boolean, countButtonValue: boolean,
    resetButtonValue: boolean) => ({
    type: 'CHANGE-DIS-BUTTON-VALUE',
    setButtonValue, countButtonValue, resetButtonValue
} as const);