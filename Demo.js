import React from "react"
import firebase from "../firebase"

const Demo =() =>{
handleChange =(e)=>{
    const {name,value}=e.target
    this.setState({
    [name]:value
    }

    )
}
configureCapthcha =()=>{
    window.recaptchaVerifier =new firebase.auth.RecaptchaVerifier('sign-in-button',{
        'size':'invisible',
        'callback':(response) =>{
            onSignInSubmit();
            console.log("Captcha verified")
        },
        defaultCountry: 'IN'
    });
}
onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

return(
    <div>
      <h2>Login Form</h2>
      <form onSubmit={this.onSignInSubmit}>
        <input type="number" name="mobile" required onChange={this.handleChange}/>
        <button type='submit'> Submit</button>
      </form>

      <h2>Enter OTP</h2>
      <form onSubmit={this.onSubmitOTP}>
        <input type="number" name="otp" required onChange={this.handleChange}/>
        <button type='submit'> Submit</button>
      </form>
    </div>

)
}


export default Demo;