import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "@/context/GlobalState";
import styles from "@/styles/Home.module.css";

export const IncomeExpenses = () => {
  const { transactions } = useContext(TransactionContext);
  const [money, setMoney] = useState({income: 0, expense:0});
  console.log(transactions);
  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, current) => acc + current, 0)
      .toFixed(2)
    const expense = amounts
      .filter((item) => item < 0)
      .reduce((acc, current) => acc + current, 0)
      .toFixed(2);
    setMoney({income, expense});
  }, [transactions]);
  return (
    <>
      <h4>Your income</h4>
      <h2 className="money plus">{money.income}</h2>
      <h4>Your expense</h4>
      <h2>{money.expense}</h2>
    </>
  );
};
