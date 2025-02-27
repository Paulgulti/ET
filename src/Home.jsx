import React, { useContext, useState } from 'react'
import { ContextProvider } from './Context'
import TransactionList from './TransactionList'
import TotalTransaction from './TotalTransaction'
import TotalBalance from './TotalBalance'
import Chart from './Chart/Chart'

const Home = () => {
    
    const { incomeTransaction, expenseTransaction, setIncomeTransaction, setExpenseTransaction } = useContext(ContextProvider)

    function removeTransaction(id){
        setIncomeTransaction(incomeTransaction.filter(tran => tran.id !== id))
        setExpenseTransaction(expenseTransaction.filter(tran => tran.id !== id))
    }
    
    
    
    return (
        <div>
            <div className='totalbalance-view'>
                <div className='balance-container'>
                    <TotalBalance/>
                    <TotalTransaction transactionAmounts={incomeTransaction} description="Total Income"/>
                    <TotalTransaction transactionAmounts={expenseTransaction} description="Total Expense"/>
                </div>
                <div className='chart-container'>
                    {incomeTransaction.length > 0 && <>
                    <Chart/>
                    <p className='chart-desc'>Total Transaction Visualization</p>
                    </>}
                </div>
            </div>
            <div className='alltransaction-view cc'>
                <div className='all-income'>
                    <TransactionList transaction={incomeTransaction} removeTransaction={removeTransaction} title="Income"/>
                </div>
                <div className='all-income'>
                    <TransactionList transaction={expenseTransaction} removeTransaction={removeTransaction} title="Expense"/>
                </div>
            </div>
        </div>

    )
}

export default Home
