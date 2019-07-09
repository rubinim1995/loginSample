
const initialState = {
  loginStatus : false
};

export default function login(state = initialState, action) {
   switch (action.type) {
   
    case 'LOGIN':
    console.log("action",action.loginStatus)
      return {
        ...state,
        loginStatus: action.loginStatus
      };
  default:
      return state;
  }
}
