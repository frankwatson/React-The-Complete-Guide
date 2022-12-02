import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenseItems = [];

  props.expenseArray.forEach((expense) => {
    expenseItems.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
