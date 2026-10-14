import ExpenseItem from "./ExpenseItem";

function ExpenceList(props) {
  const expense = props.expense;

  const total = expense.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  return (
    <div>
      <h2>Total Amount: Rs {total}</h2>

      <ExpenseItem expense={expense} 
                   onDelete={props.onDelete} />
    </div>
  );
}

export default ExpenceList;