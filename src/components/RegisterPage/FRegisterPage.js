import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import './register-page.css'


export default function RegisterPage(props) {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [validationErrors, setValidationErrors] = useState({})
  // const [image, setImage] = useState(null)
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    validationErrors: {},
    image: null,
  })

  const validateEmail = (email) => {
    const at = email.indexOf("@")
    const dot = email.lastIndexOf(".")
    if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
      return false
    } else {
      return true
    }
  }

  const validatePassword = (password) => {
    if (password.length <= 6) return false

    let hasUperCaseLetter = false
    let hasNumbers = false

    for (let i = 0; i < password.length; i++) {
      const c = password[i]

      if (c >= 'A' && c <= 'Z') hasUperCaseLetter = true
      if (c >= '0' && c <= '9') hasNumbers = true
    }

    return (hasNumbers && hasUperCaseLetter)
  }

  const onInputChange = (e) => {//error ka
    const { name, value } = e.target
    setState((prevState) => ({
      [name]: value,
    }))
  }

  const handleRegister = () => {
    const { name, email, password} = state
    const validationErrors = {}
    if (name.trim().length < 3) {
      validationErrors.name = '-Username is required.'
    }
    if (!email.trim() || !validateEmail(email)) {
      validationErrors.email = '-Please enter a valid email.'
    }
    if (!password.trim() || !validatePassword(password)) {
      validationErrors.password = '-Password must have more than 6 characters. It must include capital letters and digits'
    }
    if (Object.keys(validationErrors).length === 0) {//error ka
      props.handleData({ name, email, password })
      setState({
        name: '',
        email: '',
        password: '',
        validationErrors: {},
        image: null,
      })
    } else {
      setState({validationErrors })
    }
  }

  const onImageChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const imgSRC = e.target.result
      setState({
        image: imgSRC,
      })
    }
    reader.readAsDataURL(file)
  }

  const { name, email, password, validationErrors, image } = state

  return (
    <div className="register-page-wrapper">
      <h1 className="sign">Sign up</h1>
      <div className="register-form">
        <div className="register-input file-input-div">
          <label className="label" htmlFor="file">Choose profile picture {image ? <FaCheck /> : null}</label>
          <input type="file" accept="image/*" onChange={onImageChange} id="file" />
        </div>
        <div className="register-input">
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' value={name} onChange={onInputChange} placeholder="Enter username" id="name" />
        </div>
        <div className="register-input">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' value={email} onChange={onInputChange} placeholder="Enter e-mail" id="email" />
        </div>
        <div className="register-input">
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' value={password} onChange={onInputChange} placeholder="Enter password" id="password" />
        </div>
        {
          Object.keys(validationErrors).length ? (
            <div className="error-alert">
              <span>{validationErrors.name}</span>
              <span>{validationErrors.email}</span>
              <span>{validationErrors.password}</span>
            </div>
          ) : null
        }
        <button onClick={handleRegister} className="btn">Sign up</button>
      </div>
    </div>
  )
}