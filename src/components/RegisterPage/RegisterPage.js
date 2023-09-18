import { Component } from "react";
import './register-page.css'


export default class RegisterPage extends Component{
    state={
        name: '',
        email: '',
        password: '',
        image: undefined
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
        const {name, email, password, image}=this.state
        this.props.handleData({name, email, password})
        this.props.imageHandler(image)
        this.setState({
            name:'',
            email:'',
            password:'',
            image: undefined
        })
    }

    onImageChange=(event)=>{
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload=(e)=>{
            const imgSRC = e.target.result
            this.setState({
                image: imgSRC
            })
        }
        reader.readAsDataURL(file)
    }

    render(){
        const {name, email, password}=this.state

        return(
            <div className="container">
                <h1 className="sign">Sign up</h1>
                <div className="wrapper"
                    onDrop={this.imageDrop}
                >
                    <input type="file" accept="image/*" onChange={this.onImageChange}/>
                    <input name='name' value={name} onChange={this.onInputChange} placeholder="Enter username"/>
                    <input name='email'value={email} onChange={this.onInputChange} placeholder="Enter e-mail"/>
                    <input name='password' value={password} onChange={this.onInputChange} placeholder="Enter password"/>
                    <button onClick={this.onSignup}className="btn">Sign up</button>
                </div>
            </div>
        )
    }
}