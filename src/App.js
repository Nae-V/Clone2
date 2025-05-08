import { useState } from 'react';
import './App.css';
import PaymentForm from './components/PaymentForm/PaymentForm';
import Expenses from './components/Payments/Expenses';

function App() {
    const [expenses, setExpenses] = useState([
        {
            id: 'e1',
            title: '수건',
            amount: 12.33,
            date: new Date(2025, 8, 14),
            color: '#000000',
            email: '',
            type: '',
        },
    ]);

    const getPaymentFormData = (data) => {
        console.log('data', data);
        console.log('expenses', expenses);

        console.log('제출 데이터:', data);

        setExpenses([
            {
                id: Math.random().toString(),
                title: data.name,
                amount: data.price,
                date: new Date(data.today),
                color: data.color,
                email: data.email,
                type: data.type,
            },
            ...expenses,
        ]);
    };

    const deleteExpenseItem = (index) => {
        //filter
        // const newFilteredArray = expenses.filter((item) => item.id !== id);
        // setExpenses(newFilteredArray);

        //slice
        const beforeArray = expenses.slice(0, index);
        const afterArray = expenses.slice(index + 1);
        setExpenses([...beforeArray, ...afterArray]);
    };

    return (
        <>
            <PaymentForm getPaymentFormData={getPaymentFormData} />
            <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
        </>
    );
}

export default App;
