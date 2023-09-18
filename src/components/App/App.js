import { Component } from 'react'
import RegisterPage from '../RegisterPage'
import UserPage from '../UserPage'
import './app.css'

export default class App extends Component{

    state={
        name: '',
        email: '',
        password: '',
        image: undefined
    }

    CheckIn=(datas)=>{
        if((datas.name.length && datas.email.length) && datas.password.length){ return true } else { return false }
    }

    handleData=(datas)=>{
        if(!this.CheckIn(datas)){
            console.log("error")
            return false
        }
        this.setState({
            name:datas.name,
            email:datas.email,
            password:datas.password
        })
    }

    imageHandler=(image)=>{
        console.log(image)
        if(image){
            this.setState({
                image
            })
        }else{
            return false
        }
    }

    render(){
        const {name, email, password, image}=this.state

        return (
        <div>
            {
                this.CheckIn({name, email, password}) ? <UserPage name={name} email={email} password={password} image={image}/> : <RegisterPage handleData={this.handleData} imageHandler={this.imageHandler}/>
            }
        </div>
        )
    }
}

//
//