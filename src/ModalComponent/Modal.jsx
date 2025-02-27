import React, { useContext, useState } from 'react'
import './modal.css'
import { ContextProvider } from '../Context'


const Modal = ({ handleToggleModalPopup }) => {

    const { incomeTransaction, setIncomeTransaction, newTransactionDescription, setNewTransactionDescription,
        newTransactionAmount, setNewTransactionAmount, expenseTransaction, setExpenseTransaction
    } = useContext(ContextProvider)

    const [check, setCheck] = useState("income")
    
    function addTransaction() {
        if (check === "income" && newTransactionDescription.trim().length > 0 && newTransactionAmount !== "" ) {
            setIncomeTransaction([...incomeTransaction, { id: crypto.randomUUID(), description: newTransactionDescription, amount: newTransactionAmount }])
        }
        if (check === "expense" && newTransactionDescription.trim().length > 0 && newTransactionAmount !== "" ) {
            setExpenseTransaction([...expenseTransaction, { id: crypto.randomUUID(), description: newTransactionDescription, amount: newTransactionAmount }])
        }

        setNewTransactionDescription("")
        setNewTransactionAmount("")
        setCheck("income")
    }

    function cancelTransaction() {
        setNewTransactionDescription("")
        setNewTransactionAmount("")
        setCheck("income")
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='header'>
                    <span onClick={handleToggleModalPopup} className='cross-icon'>&#10006;</span>
                    <h2>Add New Transaction</h2>
                </div>
                <div className='body'>
                    <h3>Enter Description</h3>
                    <input type="text"
                        placeholder='enter description'
                        value={newTransactionDescription}
                        onChange={(e) => setNewTransactionDescription(e.target.value)}
                        required 
                    />
                    <h3>Enter Amount</h3>
                    <input type='number'
                        placeholder='enter amount'
                        value={newTransactionAmount}
                        onChange={(e) => setNewTransactionAmount(e.target.value)}
                        required
                    />
                    <div className='income-expense-select'>
                        <div>
                            <label htmlFor="income">
                                <input type='radio'
                                    id="income"
                                    name='income-expense'
                                    value="income"
                                    checked={check === "income"}
                                    onChange={(e) => setCheck(e.target.value)}
                                />
                                Income
                            </label>

                        </div>
                        <div>
                            <label htmlFor="expense">
                                <input type='radio'
                                    id="expense"
                                    name='income-expense'
                                    value="expense"
                                    checked={check === "expense"}
                                    onChange={(e) => setCheck(e.target.value)}
                                />
                                Expense
                            </label>

                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={cancelTransaction}>Cancel</button>
                    <button type="submit" onClick={addTransaction}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Modal