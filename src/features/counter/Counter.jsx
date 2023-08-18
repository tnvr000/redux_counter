import { useDispatch, useSelector } from "react-redux";
import { countUp } from "./counterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button onClick={() => dispatch(countUp())}>
        count is {count}
      </button>
    </div>
  )
}

export default Counter;