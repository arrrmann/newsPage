import styles from'./user-page.module.css'

export default function UserPage(props){
  const { name, email, password, image } = props.userData

  return (
    <div className={styles.wrapperUserpage}>
      <h1>Welcome, <span>{name ? name : "Guest"}</span></h1>
      <h4>Your personal info</h4>
      {
        image ? 
          <div className={styles.imageDiv}>Profile Picture:<img src={image} alt="User's" className={styles.img} />
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
