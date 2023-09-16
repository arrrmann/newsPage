import { Component } from "react";
import './user-page.css'

export default class UserPage extends Component{

    render(){
        const {name, email, password}=this.props
        return (
            <div className="wrapper-userpage">
                <ul>
                    <li>Name: {name}</li>
                    <li>E-mail: {email}</li>
                    <li>Password: {password}</li>
                </ul>
            </div>
        )
    }
}