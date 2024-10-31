import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

export default function Form() {
  //const { text, setText, amount, setAmount } = useExpense();

  const { setHistoryItem, setBalance, setIncome, setExpense } = useExpense();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  //   console.log(text, amount);

  function handleSubmit(e) {
    e.preventDefault();

    if (text !== "" && amount) {
      setHistoryItem((prev) => [...prev, { purpose: text, number: amount }]);
    }
    if (amount) setBalance((prev) => prev + Number(amount));

    if (Number(amount) > 0) setIncome((prev) => prev + Number(amount));
    if (Number(amount) < 0) setExpense((prev) => prev + Number(amount));

    setText("");
    setAmount(0);
  }

  return (
    <div className="mt-7">
      <h2 className="border-b-[1px] border-stone-300 pb-2 text-base font-semibold">
        Add new transaction
      </h2>
      <form className="mt-2">
        <label className="block py-1">Text</label>
        <input
          required
          type="text"
          placeholder="Enter text..."
          className="w-full border-[1px] border-stone-300 py-[6px] mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label className="block pt-1">Amount</label>
        <p>(negative - expense, positive - income)</p>
        <input
          required
          type="number"
          placeholder="Enter amount..."
          className="w-full border-[1px] border-stone-300 py-[6px] my-1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-purple-600 w-full py-2 text-base text-purple-50 my-1.5 hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Add transaction
        </button>
      </form>
    </div>
  );
}
