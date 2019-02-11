import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

import Footer from '../FooterComponents/Footer';

function CardContainer() {
    return (
        <div className="card-container">
            <CardBanner />
            <CardContent />
            <div className="footer">
                <Footer /> </div>
        </div>
    )
}

export default CardContainer;
