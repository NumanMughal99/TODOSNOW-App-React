// import { useEffect, useState } from "react";
// import ExpenceForm from "./Component/ExpenceForm";
// import ExpenceList from "./Component/ExpenceList";

import Todos from "./Component/Todos";


function App() {
//   const [expenses, setExpenses] = useState(()=>{
//                                 const saved = localStorage.getItem("expenses")
//                                 return saved ? JSON.parse(saved) : [] ;
//                                                } );
// useEffect(()=>{
//              localStorage.setItem("expenses", JSON.stringify(expenses))
// },[expenses])

//   const AddExpense = (newExpense) => {
//     setExpenses((prev) => [...prev, newExpense]);
//   };

//   const deleteButton = (id)=>{
//   setExpenses((prev) =>
//     prev.filter((exp) => exp.id !== id)
//   );
// };
  

  return (
    <>
      {/* <ExpenceForm onAddExpenses={AddExpense} />
      <ExpenceList expense={expenses} onDelete={deleteButton} /> */}
      <Todos/>
    </>
  );
}

export default App;