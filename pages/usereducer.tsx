import React, { useReducer, useState } from "react";

const UseReducerPage = () => {
  const [number, setNumber] = useState(1);

  const countReducer = (oldCount: any, action: any) => {
    if (action.type === "UP") {
      return oldCount + action.payload;
    } else if (action.type === "DOWN") {
      return oldCount - action.payload;
    } else if (action.type === "RESET") {
      return 0;
    }
  };

  const [count, countDispatch] = useReducer(countReducer, 0);

  const down = () => {
    countDispatch({ type: "DOWN", payload: number });
  };

  const reset = () => {
    countDispatch({ type: "RESET" });
  };

  const up = () => {
    countDispatch({ type: "UP", payload: number });
  };
  const changeNumber = (e: any) => {
    setNumber(Number(e.target.value));
  };

  return (
    <div className="flex w-full flex-col bg-amber-100">
      <h1>useReducer</h1>
      <div>
        <input type="button" value="-" onClick={down} className="border p-4" />
        <input type="button" value="0" onClick={reset} className="border p-4" />
        <input type="button" value="+" onClick={up} className="border p-4" />
        <input type="text" value={number} onChange={changeNumber} />
        <span>{count}</span>
      </div>
    </div>
  );
};

export default UseReducerPage;
