import React from 'react';
import ExpenseForm from '../../containers/ExpenseForm/ExpenseForm';
import classes from './Modal.module.scss';

const { modal } = classes;

const Modal = ({ type }) => {
    
    const renderModalType = (type) => {
        switch (type) {
            case 'expense':
                return (<ExpenseForm />)
    
            default:
                return null;
        }
    };
    
    return (
        <section className={modal}>
            {/* {expense ?
                <ExpenseForm />
                : null} */}
                {renderModalType(type)}
        </section>
    );
};

export default Modal;