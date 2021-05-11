let initialState = {
    countValue: 0,
    resetCountNum: 0,
    minNum: 0,
    maxNum: 5
};

export type InitialCountStateType = {
    countValue: number | string
    resetCountNum: number | string
    minNum: number
    maxNum: number
}

export const counterReducer = (state: InitialCountStateType = initialState,
    action: ActionType): InitialCountStateType => {
    
    switch (action.type) {
        case 'INC-VALUE': {
            return {...state, countValue: +state.countValue + 1, resetCountNum: +state.resetCountNum + 1};
        }
        case 'RESET-VALUE': {
            return {...state, countValue: action.value, resetCountNum: action.value};
        }
        case 'SET-COUNT-VALUE': {
            return {...state, countValue: action.value};
        }
        case 'SET-COUNT-SETTINGS': {
            return {
                ...state,
                countValue: action.countValue, resetCountNum: action.resetValue,
                minNum: action.minValue, maxNum: action.maxValue
            };
        }
        default:
            return state;
    }
};

type ActionType = ReturnType<typeof incValueAC> | ReturnType<typeof resetValueAC> |
    ReturnType<typeof setCountValueAC> | ReturnType<typeof setCountSettings>

export const incValueAC = () => ({type: 'INC-VALUE'} as const);
export const resetValueAC = (value: number | string) =>
    ({type: 'RESET-VALUE', value} as const);
export const setCountValueAC = (value: number | string) =>
    ({type: 'SET-COUNT-VALUE', value} as const);
export const setCountSettings = (countValue: number | string, resetValue: number | string,
    minValue: number, maxValue: number) => ({
    type: 'SET-COUNT-SETTINGS', countValue, resetValue, minValue, maxValue
} as const);