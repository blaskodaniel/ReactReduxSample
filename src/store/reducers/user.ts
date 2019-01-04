const user = (state = { username: 'Visitor', authenticate: false }, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case 'LOGIN_USER':
      newState.username = action.username;
      newState.authenticate = true;
      return newState;
    case 'LOGOUT_USER':
      newState.username = action.username;
      newState.authenticate = false;
      return newState;
    default:
      return newState
  }
}

export default user