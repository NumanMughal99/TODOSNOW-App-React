import { useEffect, useRef, useState } from "react"
import style from './todos.module.css'

function Todos() {
  const [input, setInput] = useState("")
  const inputRef = useRef("");
  const [items, setItems] = useState(() => {
  const saved = localStorage.getItem("items")
  
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [amount, setAmount] = useState("");
  const [amounts, setAmounts] = useState(() => {
    const saved = localStorage.getItem("amounts")
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  })

  const totalAmount = amounts.reduce((total, amount) => {
    return total + Number(amount);
  }, 0);


  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("amounts", JSON.stringify(amounts))
  }, [items, amounts])


  const handelSubmit = () => {
    setItems([...items, input]);
    setAmounts([...amounts, amount]);
    setInput("");
    setAmount("");
    inputRef.current.focus();
  }


  const handelDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
    setAmounts(amounts.filter((_, i) => i !== index));
  }


  return (
    <>
      <div className={style.container}>
        <div className={style.heaingContainer}>
          <nav className={style.navbar}>
            <a href="/todo">TODOS<span>NOW</span> </a>
            <a href="/home">Home</a>
          </nav>

          {/* main */}

        </div>

        <section>
          <br />

          <div className={style.totalAount}>
            <h3>Total Amount = {totalAmount}</h3>
          </div>

          <div className={style.mainContainer}>

            <div className={style.items}>
              <input
                type="text"
                name="item"
                placeholder="enter item"
                value={input}
                ref={inputRef}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>

            <div className={style.amounts}>
              <input
                type="number"
                name="amount"
                placeholder="enter amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value)
                }}
              />
            </div>

            <br />

            <div className={style.Addbtn}>
              <button onClick={handelSubmit}>Add</button>
            </div>

          </div>

          <div className={style.listContainer}>

            <div className={style.itemList}>
              <h2>Items</h2>
              <br />

              <p>
                {
                  items.map((itm, index) => (
                    <li key={index}>{itm}</li>
                  ))
                }
              </p>

            </div>

            <div className={style.amountList}>
              <h2>Price</h2>
              <br />

              <p>
                {
                  amounts.map((amt, index) => (
                    <li key={index}>
                      {amt}
                      <button onClick={() => handelDelete(index)}>
                        ❌
                      </button>
                    </li>
                  ))
                }
              </p>

            </div>

          </div>
        </section>

      </div>

      <footer className={style.footer}>
        <h3>TodosNow</h3>
        <p>Y
our simple and modern todo app</p>
      </footer>
    </>
  )
}

export default Todos