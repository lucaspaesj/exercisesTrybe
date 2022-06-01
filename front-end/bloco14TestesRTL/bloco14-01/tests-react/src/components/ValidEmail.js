// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  if (email) {
    return (
        <div>
          <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
          <h3 data-testid="is-valid" style={{color: `${verifyEmail(email) ? 'green' : 'red'}`}}>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
        </div>
    );
  }
  return (
    <div>
        <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
        <h3 data-testid="is-valid" />
    </div>
  )
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;