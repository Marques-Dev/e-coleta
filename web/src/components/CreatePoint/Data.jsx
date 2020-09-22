import React from 'react';

const Data = ({ handleInputChange }) => {
    return (
        <fieldset>
            <legend>
                <h2>Dados</h2>
            </legend>

            <div className="field">
                <label htmlFor="name">Nome da Entidade</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                onChange={handleInputChange}
                />
            </div>

            <div className="field-group">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="field">
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </fieldset>
    );
};

export default Data;
