const user = (state = [], action:any) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return [
          ...state,
          {
            id: action.id,
            username: action.username,
            authenticate: true
          }
        ]
      case 'LOGOUT_USER':
        return [
            ...state,
            {
              id: null,
              username: null,
              authenticate: false
            }
          ]
      default:
        return state
    }
  }
  
  export default user