import React, { useContext } from 'react'
import { ContextProvider } from './Context'

const TotalBalance = () => {

    const { incomeTransaction, expenseTransaction } = useContext(ContextProvider)

    const totalIncome = incomeTransaction.map(itr => parseFloat(itr.amount))
        .reduce((acc, current) => { return acc + current }, 0)

    const totalExpense = expenseTransaction.map(itr => parseFloat(itr.amount))
        .reduce((acc, current) => { return acc + current }, 0)

    const totalBalance = totalIncome - totalExpense

    return (
        <div className='total-balance'>
            <h3>Total Balance is $ {totalBalance}</h3>
        </div>
    )
}

export default TotalBalance
