import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from '../reducers/reducers';


const initState={};
const middleware=[thunk];


const store=createStore(rootreducer,initState,applyMiddleware(...middleware));

export default store;