import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import recharge from '../assetes/recharge.png'
import transaction from '../assetes/transaction.png'
import balance from '../assetes/balance.png'
import update from '../assetes/update.png'


const cardData = [
    {
        img: transaction,
        title: "Pay to Mobile Number",
        buttonText:"Send Money",
        text: "Easily transfer money to any mobile number. Fast, secure, and reliable transactions at your fingertips.",
    },
    {
        img: recharge,
        title: "Recharge Mobile Number",
        buttonText:"Recharge Mobile",
        text: "Instantly recharge any mobile number. Conveniently top up your balance anytime.",
    },
    {
        img: balance,
        title: "Balance Check!",
        buttonText:"Check Balance",
        text: "Keep track of your account balance with ease. Quick access to your latest financial information.",
    },
    {
        img: update,
        title: "Account Update!",
        buttonText:"Update",
        text: "Stay updated with the latest account changes. Get notifications and make adjustments on the go.",
    }
];

function ServicesCard() {
    const [index, setIndex] = useState(0);

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
                                <button className='btn btn-success w-75 '>{card.buttonText}</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <button className="carousel-control next" onClick={handleNext}>›</button>
        </div>
    );
}

export default ServicesCard;