import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const value = Number(amount) || 0;

  const resetAll = () => {
    setAmount(1);
    dispatch(reset());
  }

  return (
    <div className="card">
      <div>{count}</div>
      <div>
        <button onClick={() => resetAll()}>Reset</button>
      </div>
      <div>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <button onClick={() => dispatch(increment(value))}> + </button>
        <button onClick={() => dispatch(decrement(value))}> - </button>
      </div>
    </div>
  )
}

export default Counter;