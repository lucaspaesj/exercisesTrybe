import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props;
        return (
            <div className="pokemon">
                <section className="pokeInfos">
                    <span>Nome: {name}</span>
                    <span>Tipo: {type}</span>
                    <span>Peso médio: {value + measurementUnit}</span>
                </section>
                <section className="pokeImg">
                    <img src={image} alt={name}></img>
                </section>
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;
