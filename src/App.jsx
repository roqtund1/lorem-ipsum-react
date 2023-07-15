import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

function App() {
  const [amount, setAmount] = useState(1);
  const [texts, setTexts] = useState([]);

  function handleChange(e) {
    setAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTexts(data.slice(0, amount));
  }

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>tired of boring lorem ipsum?</h3>
          <div className="group">
            <label htmlFor="amount">paragraph:</label>
            <input
              onChange={handleChange}
              type="number"
              min={1}
              max={8}
              step={1}
              name="amount"
              id="amount"
              value={amount}
            />
            <button className="Btn">generate</button>
          </div>
        </form>
        <article>
          {texts.map((text) => {
            return (
              <p key={nanoid()} className="text">
                {text}
              </p>
            );
          })}
        </article>
      </div>
    </main>
  );
}

export default App;
