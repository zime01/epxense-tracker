import { ExpenseProvider } from "./context/ExpenseContext";
import Balance from "./components/Balance";
import Display from "./components/display";
import Form from "./components/Form";
import Header from "./components/header";
import History from "./components/History";

export default function App() {
  return (
    <ExpenseProvider>
      <div className="w-[400px] my-0 mx-auto bg-stone-100">
        <Header />
        <Balance />
        <Display />
        <History />
        <Form />
      </div>
    </ExpenseProvider>
  );
}
