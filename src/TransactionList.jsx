import React from 'react'

const TransactionList = ({ transaction, title, removeTransaction }) => {

    return (
        <div>
            <h3>{title}</h3>
            {transaction.map((tr,index) =>
                <div key ={tr.id} >
                    <div className='transaction-list'>
                        <p className='transaction-description'>{index + 1} &nbsp; {tr.description}</p>
                        <div className='transaction-amount-cont'>
                            <p className='transaction-amount'>${tr.amount}</p>
                            <button className='tran-delete-btn' onClick={()=>removeTransaction(tr.id)}>Delete</button>
                        </div>
                    </div>
                    <div className='dash'></div>
                </div>
            )}
        </div>
    )
}

export default TransactionList
