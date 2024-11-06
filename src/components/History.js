import { useExpense } from "../context/ExpenseContext";
import HistoryItem from "./HistoryItem";

export default function History() {
  const { historyItem } = useExpense();
  //console.log(HistoryItem);
  return (
    <div className="mt-7">
      <p className="text-base font-semibold border-b-[1px] border-stone-300 pb-2">
        History
      </p>
      <ul className="mt-3">
        {historyItem?.map(
          (item) =>
            item.purpose !== "" &&
            item.number !== 0 && (
              <HistoryItem
                purpose={item.purpose}
                number={item.number}
                key={item.number}
              />
            )
        )}
      </ul>
    </div>
  );
}
