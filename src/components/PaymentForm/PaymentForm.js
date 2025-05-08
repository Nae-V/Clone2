import React, { useState } from 'react';

import './PaymentForm.css';

const PaymentForm = ({ getPaymentFormData }) => {
    const [objectState, setObjectState] = useState({
        name: '',
        price: 0,
        today: new Date(),
        color: '#000000',
        email: '',
        type: '',
    });

    const inputTextHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            name: event.target.value,
        }));
    };

    const inputPriceHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            price: event.target.value,
        }));
    };

    const inputTodayHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            today: event.target.value,
        }));
    };

    const inputColorHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            color: event.target.value,
        }));
    };

    const inputEmailHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            email: event.target.value,
        }));
    };

    const inputRadioHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            type: event.target.value,
        }));
    };

    const buttonSubmitHander = (event) => {
        event.preventDefault();
        console.log('제출 데이터:', objectState);

        getPaymentFormData(objectState);

        setObjectState({
            name: '',
            price: 0,
            today: new Date(),
            color: '#000000',
            email: '',
            type: '',
        });
    };

    return (
        <div className="new-payment">
            <form onSubmit={buttonSubmitHander}>
                <div className="new-payment__controls">
                    <div className="new-payment__control">
                        <label>이름</label>
                        <input type="text" onChange={inputTextHandler} value={objectState.name} />
                    </div>

                    <div className="new-payment__control">
                        <label>금액</label>
                        <input type="number" min="0.01" step="0.01" onChange={inputPriceHandler} value={objectState.price} />
                    </div>

                    <div className="new-payment__control">
                        <label>날짜</label>
                        <input type="date" min="2019-01-01" max="2023-12-31" onChange={inputTodayHandler} value={objectState.today} />
                    </div>

                    <div className="new-payment__control">
                        <label>색상</label>
                        <input type="color" onChange={inputColorHandler} value={objectState.color} />
                    </div>

                    <div className="new-payment__control">
                        <label>이메일</label>
                        <input type="email" onChange={inputEmailHandler} value={objectState.email} />
                    </div>

                    <div className="new-payment__control">
                        <label>결제 방법</label>
                        <div>
                            <label>
                                <input type="radio" name="paymentType" value="카드" checked={objectState.type === '카드'} onChange={inputRadioHandler} />
                                카드
                            </label>
                            <label>
                                <input type="radio" name="paymentType" value="현금" checked={objectState.type === '현금'} onChange={inputRadioHandler} />
                                현금
                            </label>
                        </div>
                    </div>
                </div>
                <div className="new-payment__actions">
                    <button type="submit">결제 추가</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
