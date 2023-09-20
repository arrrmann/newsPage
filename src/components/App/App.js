import { Component } from 'react'
import RegisterPage from '../RegisterPage'
import UserPage from '../UserPage'
import './app.css'

export default class App extends Component{

    state={
        isRegistred: false,
    }

    handleData=(datas)=>{
        localStorage.setItem('user', JSON.stringify(datas))
        this.setState({
            isRegistred:true
        })
    }


    render(){
        const userData = JSON.parse(localStorage.getItem('user'))
        const {isRegistred}=this.state

        return (
        <div>
            {
                (isRegistred || JSON.parse(localStorage.getItem('user'))) ? <UserPage userData={userData}/> : <RegisterPage handleData={this.handleData} />
            }
        </div>
        )
    }
}
