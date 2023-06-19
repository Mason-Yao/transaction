import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "@/context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const [balance, setBalance] = useState(0);
  console.log(transactions);
  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const balance = transactions.reduce((acc, current) => acc + current.amount, 0);
    setBalance(balance);
  }, [transactions]);
  return (
    <>
      <h4>Your Balance</h4>
      <h2>{balance}</h2>
    </>
  )
};
