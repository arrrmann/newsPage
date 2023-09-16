import { Component } from 'react'
import RegisterPage from '../RegisterPage'
import UserPage from '../UserPage'
import './app.css'

export default class App extends Component{

    state={
        name: '',
        email: '',
        password: ''
    }

    CheckIn=(Datas)=>{
        if((Datas.name.length && Datas.email.length) && Datas.password.length ){ return true } else { return false }
    }

    handleData=(Datas)=>{
        if(!this.CheckIn(Datas)){
            console.log("error")
            return false
        }
        this.setState({
            name:Datas.name,
            email:Datas.email,
            password:Datas.password
        })
    }



    render(){
        const {name, email, password}=this.state

        return (
        <div>
            {
                this.CheckIn({name, email, password}) ? <UserPage name={name} email={email} password={password}/> : <RegisterPage handleData={this.handleData}/>
            }
        </div>
        )
    }
}

//
//