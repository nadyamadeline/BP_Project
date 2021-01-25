import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => {
    // const [count, setCount] = useState(0);

    // const addCount = () => {
    //     setCount(count+1);
    // }
    // const minusCount = () => {
    //     setCount(count-1);
    // }
    console.log(props)
    return (
        <div className='counter'>
            <h1>Fan Counter!</h1>
            <h2>You are Fan No. {props.hitungDong}</h2>
            <h4>Click to add/subtract fans!</h4>
            <button onClick={props.handleMinusAction}>-</button>
            <button onClick={props.handleAddAction}>+</button>
        </div>   
    )
}

const mapStateToProps = (state) => {
    return {
        hitungDong: state.hitung // ini hitung dapetnya dari index.js
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddAction: () => dispatch({type: 'ADD_COUNT'}),
        handleMinusAction: () => dispatch({type: 'MINUS_COUNT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);