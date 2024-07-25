import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import recharge from '../assetes/recharge.png'
import transaction from '../assetes/transaction.png'
import balance from '../assetes/balance.png'
import update from '../assetes/update.png'
import CreditMoney from './modals/creditMoney';
import { useNavigate } from 'react-router-dom';


const cardData = [
    {
        img: transaction,
        title: "Pay to Mobile Number",
        buttonText:"Send Money",
        stateChangeVariable:"transaction",
        text: "Easily transfer money to any mobile number. Fast, secure, and reliable transactions at your fingertips.",
    },
    {
        img: recharge,
        title: "Recharge Mobile Number",
        buttonText:"Recharge Mobile",
        stateChangeVariable:"recharge",
        text: "Instantly recharge any mobile number. Conveniently top up your balance anytime.",
    },
    {
        img: balance,
        title: "Balance Check!",
        buttonText:"Check Balance",
        stateChangeVariable:"balance",
        text: "Keep track of your account balance with ease. Quick access to your latest financial information.",
    },
    {
        img: update,
        title: "Account Update!",
        buttonText:"update",
        stateChangeVariable:"update",
        text: "Stay updated with the latest account changes. Get notifications and make adjustments on the go.",
    }
];

function ServicesCard() {
    const [index, setIndex] = useState(0);
    const [visibleTrasaction, setVisibleTrasaction] = useState(false)
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
    const navigate=useNavigate();

    return (
        <div className="carousel-container  mt-3 p-4" >
            <CreditMoney visiblePin={visibleTrasaction} setVisiblePin={setVisibleTrasaction} />
            <button className="carousel-control prev" onClick={handlePrev}>‹</button>
            <div className="carousel-inner d-flex justify-content-center align-items-center p-5  p-5">
                {visibleCards.map((card, i) => (
                    <div key={i} className={`card-container ${i === 1 ? 'active' : ''}`}>
                        <div className="card rounded shadow p-3 border border-none" style={{ width: '23rem' }}>
                            <img src={card.img} className="card-img-top" alt={card.title} />
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                            <div className="container">
                                <button className='btn btn-success w-75 '
                                onClick={()=>{
                                    if(card.stateChangeVariable=='transaction'){
                                        setVisibleTrasaction(true);
                                    }
                                    else if(card.stateChangeVariable=='update'){
                                        navigate('/update-profile');
                                    }
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

export default ServicesCard;