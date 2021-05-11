import {combineReducers, createStore, EmptyObject} from 'redux';
import {counterReducer} from './counter-reducer';
import {settingReducer} from './setting-reducer';
import {loadState, saveState} from '../../utils/localstorage-utils';

let rootReducer = combineReducers({
    countDisplay: counterReducer,
    settingDisplay: settingReducer
});

export type StateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        countDisplay: store.getState().countDisplay,
        settingDisplay: store.getState().settingDisplay
    });
});


// @ts-ignore
window.store = store;

export default store;