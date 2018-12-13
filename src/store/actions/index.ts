export const Login = (username:string, id:number) => ({
  type: 'LOGIN_USER',
  id,
  username
});

export const Logout = () => ({
  type: 'LOGOUT_USER'
})
