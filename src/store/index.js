import { game } from './game';
import { combineReducers, createStore } from 'redux';


export default createStore(combineReducers({ game }));