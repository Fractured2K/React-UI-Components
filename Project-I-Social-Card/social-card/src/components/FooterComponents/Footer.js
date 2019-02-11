import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './Footer.css';



function Footer() {
    return (
        <div>
            <footer>
                <span>
                    <FeatherIcon icon="message-circle" />
                </span>
                <span>
                    <FeatherIcon icon="refresh-cw" /> 6
                </span>

                <span>
                    <FeatherIcon icon="heart" /> 4
                </span>

                <span>
                    <FeatherIcon icon="mail" />
                </span>
            </footer>
        </div >
    )
}

export default Footer;
