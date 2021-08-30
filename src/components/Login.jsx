import React, { Component } from 'react'
import "../styles/Login.css"

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username : "",
            password: ""
        }
    }

    handleChange = (event, key) => this.setState({[key]: event.target.value});
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Logueado");
    }

    render() {
        const {password, username} = this.state
        return (
            <form className="login__container">
                <div>
                    <label className="labelStyle" >Username:</label>
                    <input  type="text" value={username} onChange={(event) => this.handleChange(event,"username")}  />
                </div>
                <div>
                    <label className="labelStyle" >Password:</label>
                    <input type="password" value={password} onChange={(event) => this.handleChange(event,"password")}  />
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}
