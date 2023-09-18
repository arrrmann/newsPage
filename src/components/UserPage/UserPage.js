import { Component } from "react";
import './user-page.css'

export default class UserPage extends Component{

    render(){
        const {name, email, password, image}=this.props
        return (
            <div className="wrapper-userpage">
                <ul>
                    <li>Name: {name}</li>
                    <li>E-mail: {email}</li>
                    <li>Password: {password}</li>
                </ul>
                {
                    image ? <img src={image} alt="User's" className="img"/> : null
                }
            </div>
        )
    }
}