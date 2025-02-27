import React, { createContext, useEffect, useState } from 'react'

export const ContextProvider = createContext()

const Context = ({ children }) => {
    const [incomeTransaction, setIncomeTransaction] = useState(()=>{
      const incomeData = localStorage.getItem("incomeData")
      return incomeData ? JSON.parse(incomeData) : []
    })
    const [expenseTransaction, setExpenseTransaction] = useState(()=>{
      const expenseData = localStorage.getItem("expenseData")
      return expenseData ? JSON.parse(expenseData) : []
    })
    const [newTransactionDescription, setNewTransactionDescription] = useState("")
    const [newTransactionAmount, setNewTransactionAmount] = useState("")

    useEffect(()=>{
      localStorage.setItem("incomeData", JSON.stringify(incomeTransaction))
    }, [incomeTransaction])
    useEffect(()=>{
      localStorage.setItem("expenseData", JSON.stringify(expenseTransaction))
    }, [expenseTransaction])

  return (
    <ContextProvider.Provider value={{  incomeTransaction, setIncomeTransaction, 
                                        newTransactionDescription, setNewTransactionDescription, 
                                        newTransactionAmount, setNewTransactionAmount,
                                        expenseTransaction, setExpenseTransaction}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default Context