import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (no recarga)
        // console.log('submit hecho!')

        if(inputValue.trim().length > 2) {
            // setCategories(cats => [...cats, inputValue]);
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
