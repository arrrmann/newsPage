import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import styles from './register-page.module.css'


export default function RegisterPage(props) {
  console.log(styles)
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

  const onInputChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ //stex chmoranas destrukturizacnel, hakarak depqum error klini object-y kardaluc
      ...prevState,//sax nuyn dzevov klini voncvor naxnakann er
      [name]: value,//uxaki stex avelacreci arden popoxvac valunerov arjeqnery
    }));
    // setState({
    //   ...state,
    //   [name]: value
    // })       //kareli e naev ayspes grel
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
    if (Object.keys(validationErrors).length === 0) {
      props.handleData({ name, email, password })
      setState({
        name: '',
        email: '',
        password: '',
        validationErrors: {},
        image: null,
      })
    } else {
      setState({ ...state, validationErrors })//arden krknac dzevov-- chmoranas destrukturizacnel naxord arjeqnery
    }
  }

  const onImageChange = (event) => {
    const file = event.target.files[0]

    const reader = new FileReader()
    reader.onload = (e) => {
      const imgSRC = e.target.result
      setState({
        // ...state //image-i ashxatanq chka
        image: imgSRC,
      })
    }

    reader.readAsDataURL(file)
  }

  const { name, email, password, validationErrors, image } = state

  return (
    <div className={styles.registerPageWrapper}>
      <h1 className={styles.sign}>Sign up</h1>
      <div className="register-form">
        <div className={styles.registerInput + ' ' + styles.fileInputDiv}>
          <label className={styles.label} htmlFor="file">Choose profile picture {image ? <FaCheck /> : null}</label>
          <input type="file" accept="image/*" onChange={onImageChange} id="file" />
        </div>
        <div className={styles.registerInput}>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' value={name} onChange={onInputChange} placeholder="Enter username" id="name" />
        </div>
        <div className={styles.registerInput}>
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' value={email} onChange={onInputChange} placeholder="Enter e-mail" id="email" />
        </div>
        <div className={styles.registerInput}>
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' value={password} onChange={onInputChange} placeholder="Enter password" id="password" />
        </div>
        {
          Object.keys(validationErrors).length ? (
            <div className={styles.errorAlert}>
              <span>{validationErrors.name}</span>
              <span>{validationErrors.email}</span>
              <span>{validationErrors.password}</span>
            </div>
          ) : null
        }
        <button onClick={handleRegister} className={styles.btn}>Sign up</button>
      </div>
    </div>
  )
}