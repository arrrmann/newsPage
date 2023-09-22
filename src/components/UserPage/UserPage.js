import { Component } from "react";
import './user-page.css'

export default class UserPage extends Component {

  render() {
    const { name, email, password, image } = this.props.userData
    return (
      <div className="wrapper-userpage">
        <h1>Welcome, <span>{name ? name : "Guest"}</span></h1>
        <h4>Your personal info</h4>
        {
          image ? 
            <div className="image-div">Profile Picture:<img src={image} alt="User's" className="img" />
              </div> : null
        }
        <div>
          Name: <span>{name}</span>
        </div>
        <div>
          E-mail: <span>{email}</span>
        </div>
        <div>
          Password: <span>{password}</span>
        </div>
      </div>
    )
  }
}
