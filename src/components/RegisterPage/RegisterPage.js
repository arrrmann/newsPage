import { Component } from "react";
import { FaCheck } from "react-icons/fa6";
import './register-page.css'


export default class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    validationErrors: {},
    image: null,
  }

  validateEmail = (email) => {
    const shnik = email.indexOf("@")
    const ket = email.lastIndexOf(".")
    if (shnik < 1 || ket < shnik + 2 || ket + 2 >= email.length) {
      return false
    } else {
      return true
    }
  }
  validatePassword = (password) => {
    if (password.length <= 6) return false

    let hasUperCaseLetter = false
    let hasNumbers = false

    for (let i = 0; i < password.length; i++) {
      const char = password[i]

      if (char >= 'A' && char <= 'Z') hasUperCaseLetter = true
      if (char >= '0' && char <= '9') hasNumbers = true
    }

    return (hasNumbers && hasUperCaseLetter)
  }

  onInputChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => {
      return {
        [name]: value
      }
    })
  }

  handleRegister = () => {

    const { name, email, password, image } = this.state;
    const validationErrors = {}

    if (name.trim().length < 3) {
      validationErrors.name = 'Username is required.'
    }
    if (!email.trim() || !this.validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email.'
    }
    if (!password.trim() || !this.validatePassword(password)) {
      validationErrors.password = 'Password must have more than 6 charecters. It must includes capitale letters and digits'
    }

    if (Object.keys(validationErrors).length === 0) {
      this.props.handleData({ name, email, password, image })
      this.setState({
        name: '',
        email: '',
        password: '',
        validationErrors: {},
        image: undefined
      })
    } else {
      this.setState({ validationErrors })
    }
  }


  onImageChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const imgSRC = e.target.result
      this.setState({
        image: imgSRC
      })
    }
    reader.readAsDataURL(file)
  }

  render() {
    const { name, email, password, validationErrors, image } = this.state

    return (
      <div className="register-page-wrapper">
        <h1 className="sign">Sign up</h1>
        <div className="register-form">
          <div className="register-input file-input-div">
            <label className="label" htmlFor="file">Choose profile picture {image ? <FaCheck /> : null}</label>
            <input type="file" accept="image/*" onChange={this.onImageChange} id="file" />
          </div>
          <div className="register-input">
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' value={name} onChange={this.onInputChange} placeholder="Enter username" id="name" />
          </div>
          <div className="register-input">
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' value={email} onChange={this.onInputChange} placeholder="Enter e-mail" id="email" />
          </div>
          <div className="register-input">
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' value={password} onChange={this.onInputChange} placeholder="Enter password" id="password" />
          </div>
          {
            Object.keys(validationErrors).length ? (
              <div className="error-alert">
                <span>{validationErrors.email}</span>
                <span>{validationErrors.password}</span>
                <span>{validationErrors.name}</span>
              </div>
            ) : null
          }
          <button onClick={this.handleRegister} className="btn">Sign up</button>
        </div>
      </div>
    )
  }
}
