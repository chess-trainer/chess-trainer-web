import React, { Component } from "react";
 
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_username:'',
      login_password:'',
      register_username:'',
      register_password:'',
      register_email:''
    }
  }
  render() {
    return (
      <div>
        <h2>Tactics</h2>
        <p>Let's do tactics!</p>
      </div>
    );
  }
}
 
export default Contact;
