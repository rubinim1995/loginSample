

export function login(username , password){
    console.log(username,password,"???")

    let loginStatus = false;
    return (dispatch) => {
       const user = {
        "username":"hruday@gmail.com",
        "password" :'hruday123'
        }
        if(username === user.username && password === user.password){
            loginStatus = true;
        }

        dispatch({
          type: 'LOGIN',
          loginStatus,
        });
      };
    
}