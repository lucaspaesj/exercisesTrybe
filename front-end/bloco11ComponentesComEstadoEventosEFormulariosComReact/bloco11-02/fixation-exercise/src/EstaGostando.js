import React from 'react';

class EstaGostando extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <label>Estou gostando de aprender React?
                <select name="estouGostando" value={value} onChange={handleChange}>
                    <option>Sim</option>
                    <option>Não</option>
                </select>
            </label>
        )
    }
}

export default EstaGostando;
