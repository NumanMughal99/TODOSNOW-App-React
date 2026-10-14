function ExpenseItem(props) {
  return (
    <div>
      <ul>
        {props.expense.map((exp) => (
          <li key={exp.id}>
            {exp.item} - Rs {exp.amount}   <button onClick={() => props.onDelete(exp.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseItem;