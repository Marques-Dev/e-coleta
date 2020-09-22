import React, { } from 'react';

const Items = ({ items, setItems, selectedItems, handleSelectedItem }) => {
    return (
        <fieldset>
            <legend>
                <h2>Ítens de coleta</h2>
                <span>Selecione um ou mais itens abaixo</span>
            </legend>

            <ul className="items-grid">
                {items.map(({ id, title, imageURL }) => (
                    <li
                        key={id}
                        onClick={() => handleSelectedItem(id)}
                        className={selectedItems.includes(id) ? 'selected' : ''}
                    >
                        <img src={imageURL} alt={title} />
                        <span>{title}</span>
                    </li>
                ))}
            </ul>
        </fieldset>
    );
};

export default Items;
