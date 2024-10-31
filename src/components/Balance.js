import { useExpense } from "../context/ExpenseContext";
import { formatCurrency } from "../helpers/helpers";

export default function Balance() {
  const { balance } = useExpense();
  return (
    <div className="mt-6">
      <p className="text-base  uppercase">Your balance</p>
      <p className="font-semibold text-2xl">{formatCurrency(balance)}</p>
    </div>
  );
}
