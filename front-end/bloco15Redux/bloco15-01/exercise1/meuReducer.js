import Redux from 'redux';

const ESTADO_INICIAL = {
  login: true,
  email: "luquinhas123@gmail.com",
};

const meuReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

export default meuReducer;
