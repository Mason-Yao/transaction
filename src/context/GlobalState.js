import React, { createContext, userReducer } from "react";
import { AppReducer } from "./AppReducer";
import { useReducer } from "react";
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 1000 },
    { id: 3, text: "Book", amount: -10 },
  ],
}

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    })
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    })
  }
  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>
      {children}
    </TransactionContext.Provider>
  )
}