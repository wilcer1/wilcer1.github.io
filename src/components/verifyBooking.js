import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import '../style/VerifyBooking.css';
const sign = require('jwt-encode');

function VerifyBooking() {
  const responseFacebook = (response) => {
    const jwt = sign(response, '');
    if (response) {
      sessionStorage.setItem('F-Token', jwt);
    }
  };

  const responseGoogle = (response) => {
    console.log(response.credential);
    sessionStorage.setItem('G-Token', response.credential);
  };

  return (
    <div className="VerifyBooking">
      <GoogleOAuthProvider clientId="916587672516-pib163h8ridhcoknethuiq0l3d3ahbc6.apps.googleusercontent.com">
        ...;
        <h1>Testing</h1>
        <GoogleLogin
          className="loginButton"
          onSuccess={responseGoogle}
          onError={(error) => {
            console.log('Login Failed', error);
          }}
        />
        ;
      </GoogleOAuthProvider>
      <div className="fbLogin">
        {' '}
        <FacebookLogin
          className="loginButton"
          appId="789331552103616"
          autoLoad={false}
          fields="name,email,picture"
          onClick={() => {
            console.log('click');
          }}
          callback={responseFacebook}
        />
      </div>
    </div>
  );
}

export default VerifyBooking;
