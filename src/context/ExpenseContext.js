import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

function ExpenseProvider({ children }) {
  const [historyItem, setHistoryItem] = useState([{ purpose: "", number: 0 }]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  console.log(historyItem);

  return (
    <ExpenseContext.Provider
      value={{
        historyItem,
        setHistoryItem,
        balance,
        setBalance,
        income,
        setIncome,
        expense,
        setExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

function useExpense() {
  const context = useContext(ExpenseContext);
  if (context === undefined)
    throw new Error("Expense context was used outside the Expense Provider");

  return context;
}

export { ExpenseProvider, useExpense };
