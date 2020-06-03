import React from 'react';


const UserGreeting = (props) =>
{
    return <h2>Welcome Hung!</h2>;
};

const GuestGreeting = (props) =>
{
    return <h2>Please sign up!</h2>;
};

const Greeting = (props) =>
{
    const isLogIn = props.isLogIn;
    if (isLogIn){
        return <UserGreeting />;
    }else return <GuestGreeting />;

};

const LoginButton = (props) =>
{
    return (
         // this function return button with parameter props.onClick to execute the function 
        // this.handleLogoutClick 
      <button onClick={props.onClick}>Log In</button>
    );
}

const LogoutButton = (props) =>
{
    
    return (
        // this function return button with parameter props.onClick to execute the function 
        // this.handleLoginClick 
        <button onClick={props.onClick} >Log Out</button>
    );
}

class LoginControl extends React.Component
{
    constructor() {
        super();
        this.state = {isLogIn: true };
      };

      // handle state
      handleLoginClick = () => {
        this.setState({isLogIn: true});
      };

      handleLogoutClick = () => {
        this.setState({isLogIn: false});
      };

      render() {
        const isLogIn = this.state.isLogIn;
        let button; /* Khai báo biến button sử dụng cho if */

        // handle button base on isLogIn
        if (isLogIn) {
            // LogoutButton is the function with parameter onClick
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            // LogibButton button is the function with parameter onClick
          button = <LoginButton onClick={this.handleLoginClick} />;
        }

        
        return (
          <div>
              {/* 
               * handle greeting baseOn isLogIn
               *
               */}
            <Greeting isLogIn={isLogIn} />
            {button}

{/* 
  * 2nd way: Viết một render có điều kiện bên trong cấu trúc JSX
   {isLogIn ? (
    <div>
        <LogoutButton onClick={this.handleLogoutClick} />
        <UserGreeting />
    </div>
      ) : (
          <div>
        <LoginButton onClick={this.handleLoginClick} />
        <GuestGreeting />
        </div>
      )} */}
        </div>
        );
      };
  
}

export default LoginControl;