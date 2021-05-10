import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {settingReducer} from './setting-reducer';

let rootReducer = combineReducers({
    countDisplay: counterReducer
    // settingDisplay: settingReducer
});

export type StateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);


// @ts-ignore
window.store = store;