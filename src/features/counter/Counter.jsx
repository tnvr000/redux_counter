// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div>
    </div>
  )
}

export default Counter;