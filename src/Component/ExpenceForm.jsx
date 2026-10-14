import { useRef, useState } from "react";

function ExpenceForm(props) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const itemRef = useRef("");

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log("item:", item);
    console.log("Amount:", amount);

    const newExpense = {
      id: Date.now(),
      item,
      amount: parseFloat(amount),
    };

    props.onAddExpenses(newExpense);

    setItem("");
    setAmount("");

    itemRef.current.focus();
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          ref={itemRef}
        />

        <input
          type="number"
          placeholder="enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpenceForm;