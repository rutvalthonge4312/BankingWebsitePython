import React, { useState } from 'react';
import transaction from '../assetes/transaction.png'
import balance from '../assetes/balance.png'
import { useNavigate } from 'react-router-dom';


const cardData = [
    {
        img: transaction,
        title: "Open Bank Account",
        buttonText:"Open Account",
        pageRoute:"/create-account",
        text: "Easily transfer money to any mobile number. Fast, secure, and reliable transactions at your fingertips.",
    },
    {
        img: balance,
        title: "Credit Amount",
        buttonText:"Credit Money",
        pageRoute:"/deposite_money",
        text: "Easily transfer money to any mobile number. Fast, secure, and reliable transactions at your fingertips.",
    },
];

function AdminServicesCard() {
    const [index, setIndex] = useState(0);
    const navigate=useNavigate();
    const handlePrev = () => {
        const newIndex = index === 0 ? cardData.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = index === cardData.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    };

    const visibleCards = [
        cardData[(index - 1 + cardData.length) % cardData.length],
        cardData[index],
        cardData[(index + 1) % cardData.length],
    ];

    return (
        <div className="carousel-container mt-3 p-4" >
            <button className="carousel-control prev" onClick={handlePrev}>‹</button>
            <div className="carousel-inner p-1">
                {visibleCards.map((card, i) => (
                    <div key={i} className={`card-container ${i === 1 ? 'active' : ''}`}>
                        <div className="card rounded shadow p-3 border border-none" style={{ width: '25rem' }}>
                            <img src={card.img} className="card-img-top" alt={card.title} />
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                            <div className="container">
                                <button className='btn btn-success w-75 '
                                onClick={()=>{
                                    navigate(card.pageRoute);
                                }}
                                >{card.buttonText}</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <button className="carousel-control next" onClick={handleNext}>›</button>
        </div>
    );
}

export default AdminServicesCard;