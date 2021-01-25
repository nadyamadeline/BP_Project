const redux = require('redux');
// const createStore = redux.createStore(); // this is like the usual import in react

// create initial state
const initialState = {
    age: 25,
    score: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_AGE'){
        return {
            ...state, // copy the state so we don't 'ruin' the array
            age: state.age + 10
        }
    } else if (action.type === 'ADD_SCORE'){
        return {
            ...state,
            score: state.score + 100
        }
    }
    console.log('state =>', state);
    console.log('action =>',action);
    return state
}

// store
const store = redux.createStore(rootReducer);
console.log('getState =>', store.getState());

// action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'ADD_SCORE'});
console.log('action getState =>', store.getState())
