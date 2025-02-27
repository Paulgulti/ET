import React, { useState } from 'react'
import Modal from './ModalComponent/Modal.jsx'

const Header = () => {

    const [showModalPopup, setShowModalPopup] = useState(false)
    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }
    return (
        <>
            <div className='navigation'>
                <h1>Expense <span>Tracker</span></h1>
                <button onClick={handleToggleModalPopup}>Add New <span>Transaction</span></button>
            </div>
            {
                showModalPopup && <Modal handleToggleModalPopup={handleToggleModalPopup} />
            }
        </>
    )
}

export default Header