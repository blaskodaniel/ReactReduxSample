export const Login = (username:string, id:number) => {
  return {
    type: 'LOGIN_USER',
    id,
    username
  }
};

export const Logout = () => {
  return {type: 'LOGOUT_USER'}
}

export const Loader = (value: boolean) => {
  return {
    type: "LOADER",
    value
  }
}

/* ASYNC */
export const GetMatch = () => {
  return (dispatch: any) => {
    // Run page loader
    dispatch(Loader(true));
    
    // Run async request
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      dispatch(GetMatchSuccess(users));
      dispatch(Loader(false));
    }).catch(err => {
      dispatch(GetMatchError(err));
      dispatch(Loader(false));
    })
  }
  
}

export const GetMatchSuccess = (payload: any) => {
  return {
    type: 'GET_MATCH_SUCCESS',
    value: payload
  }
}

export const GetMatchError = (msg: any) => {
  return {
    type: 'GET_MATCH_ERROR',
    value: msg
  }
}