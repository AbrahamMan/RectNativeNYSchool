import {ACTION_GET_SCHOOLLIST} from '../actions/actions';

const initState={
    item:[]
}

const schoolreducer=(state,action)=>{
    console.log("hitting")
    const newState={
        ...state,
        item:action.payload
    }
    console.log(newState);
    return newState;
}

const rootreducer=(state=initState,action)=>{
    console.log("heard")
    switch (action.type){
        case ACTION_GET_SCHOOLLIST:
            return schoolreducer(state,action);
        default:
            return state;
    }
}
export default rootreducer;

