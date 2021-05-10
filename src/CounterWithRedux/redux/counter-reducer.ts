const initialState: InitialStateType = {
    countNum     : 0,
    resetCountNum: 0,
    minNum       : 0,
    maxNum       : 5
};

type InitialStateType = {
    countNum: number
    resetCountNum: number
    minNum: number
    maxNum: number
}

export const counterReducer = (state = initialState,
    action: ActionType): InitialStateType => {
    
    switch (action.type) {
        case 'INC-VALUE': {
            return {...state, countNum: action.value + 1, resetCountNum: action.value + 1};
        }
        case 'RESET-VALUE': {
            return {...state, countNum: action.value, resetCountNum: action.value};
        }
        default:
            return state;
    }
};

type ActionType = ReturnType<typeof incValueAC> | ReturnType<typeof resetValueAC>

export const incValueAC = (value: number) =>
    ({type: 'INC-VALUE', value} as const);

export const resetValueAC = (value: number) => ({type: 'RESET-VALUE', value} as const);