import { Component } from "react";
import './register-page.css'


export default class RegisterPage extends Component{
    state={
        name: '',
        email: '',
        password: ''
    }

    onInputChange=(e)=>{
        const {name, value}=e.target
        this.setState((prevState)=>{
            return {
                [name]:value
            }
        })
    }

    onSignup=()=>{
        const {name, email, password}=this.state

        console.log(name, email, password)
    }

    render(){
        return(
            <div className="container">
                <h1 className="sign">Sign up</h1>
                <div className="wrapper">
                    <input name='name' onChange={this.onInputChange} placeholder="Enter username"/>
                    <input name='email' onChange={this.onInputChange} placeholder="Enter e-mail"/>
                    <input name='password' onChange={this.onInputChange} placeholder="Enter password"/>
                    <button onClick={this.onSignup}className="btn">Sign up</button>
                </div>
            </div>
        )
    }
}