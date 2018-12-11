export const addUser = (username:string, id:number) => ({
  type: 'LOGIN_USER',
  id,
  username
})
