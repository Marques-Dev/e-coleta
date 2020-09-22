import React from 'react';

const Button = ({ icon, text, type }) => {
    return (
        <button type={type}>{text}</button>
    );
};

export default Button;
