import React from 'react'

const TotalTransaction = ({ transactionAmounts, description }) => {
    
    const total = transactionAmounts.map(tr => parseFloat(tr.amount))
        .reduce((accumulator, current) => { return accumulator + current }, 0)
        
    return (
        <div>
            <p>$&nbsp; {total}</p>
            <span>{description}</span>
        </div>
    )
}

export default TotalTransaction
