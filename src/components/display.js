import { useExpense } from "../context/ExpenseContext";
import { formatCurrency } from "../helpers/helpers";

export default function Display() {
  const { income, expense } = useExpense();
  return (
    <div className="flex items-center justify-evenly border-[1px] border-stone-300 mt-3 bg-white">
      <div className="p-3 flex flex-col items-center justify-center ">
        <p className="uppercase text-base">income</p>
        <p className="text-green-500 text-xl font-semibold">
          {formatCurrency(income)}
        </p>
      </div>
      <div className="border-[0.5px] border-stone-300 h-8 mx-4"></div>
      <div className="p-3 flex flex-col items-center justify-center o">
        <p className=" uppercase text-base">expense</p>
        <p className=" text-red-500 text-xl font-semibold">
          {formatCurrency(expense)}
        </p>
      </div>
    </div>
  );
}
