import React from 'react';

class Nome extends React.Component {
    render() {
        const { value, handleChange, haveError } = this.props;
        let error = haveError;
        if (value.length > 100) error = '';
        return (
            <label>Qual o seu nome?
                <input
                    name="nome"
                    type="text"
                    value={ value }
                    onChange={ handleChange }
                />
                <span style={{ display: error }}>Deu ruim ai amigão!</span>
            </label>
        )
    }
}

export default Nome;
