const initialState: InitialStateType = {
    maxInputNum: 0,
    minInputNum: 0
};

type InitialStateType = {
    maxInputNum: number
    minInputNum: number
}

export const settingReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INIT-INPUT-VALUE': {
            return {...state, minInputNum: action.value, maxInputNum: action.value};
        }
    }
};

type ActionType = ReturnType<typeof setInitialInputValue>

const setInitialInputValue = (value: number) => ({type: 'INIT-INPUT-VALUE', value} as const);