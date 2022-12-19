import React from "react";
import { useBookStore } from "./zustore";

function App() {
  const { amount, author, updateAmount, sumAmount } = useBookStore((state) => ({
    amount: state.amount,
    author: state.author,
    updateAmount: state.updateAmount,
    sumAmount: state.sumAmount,
  }));

  return (
    <div className="App">
      <h1>Author : {author}</h1>
      <span>
        Amount : <strong>{amount}</strong>
      </span>
      <button onClick={() => sumAmount(100)}>Pluse 100</button>
      <button onClick={() => updateAmount(0)}>Clear Amount</button>
    </div>
  );
}

export default App;
