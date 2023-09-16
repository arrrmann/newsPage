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
        this.props.handleData({name, email, password})
        this.setState({
            name:'',
            email:'',
            password:''
        })
    }

    render(){
        const {name, email, password}=this.state

        return(
            <div className="container">
                <h1 className="sign">Sign up</h1>
                <div className="wrapper">
                    <input name='name' value={name} onChange={this.onInputChange} placeholder="Enter username"/>
                    <input name='email'value={email} onChange={this.onInputChange} placeholder="Enter e-mail"/>
                    <input name='password' value={password} onChange={this.onInputChange} placeholder="Enter password"/>
                    <button onClick={this.onSignup}className="btn">Sign up</button>
                </div>
            </div>
        )
    }
}