//import { useExpense } from "../context/ExpenseContext";
import { formatCurrency } from "../helpers/helpers";

export default function HistoryItem({ purpose, number }) {
  //const { historyItem, setHistoryItem } = useExpense();
  return (
    <>
      <li
        className={`flex justify-between border-[1px] border-stone-300  border-r-4  ${
          number > 0 ? "border-r-green-500" : "border-r-red-500"
        } p-2 bg-white mb-2`}
      >
        <p>{purpose}</p>
        <p>{formatCurrency(number)}</p>
      </li>
    </>
  );
}
