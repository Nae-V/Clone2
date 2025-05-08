import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    console.log('받운 데이터:', props);
    return (
        <Card className="expenses">
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={item.id}
                    email={item.email}
                    color={item.color}
                    id={item.id}
                    index={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    type={item.type}
                    deleteExpenseItem={props.deleteExpenseItem}
                />
            ))}
        </Card>
    );
};

export default Expenses;
