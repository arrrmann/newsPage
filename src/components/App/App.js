import { useState } from 'react'
import LocalStorageService from '../../services/LocalStorageService'
import RegisterPage from '../RegisterPage'
import UserPage from '../UserPage'
import DarkThemeToggle from '../DarkThemeToggle/DarkThemeToggle.js'
import Test1 from '../../Test1/Test1.js'
import './app.css'

export default function App(){
    const storedData=LocalStorageService.getUserData()
    const [isRegistred, setIsRegistred]=useState(!!storedData)
    const [userData, setUserData]=useState(storedData)

    const handleData=(userData)=>{
        LocalStorageService.saveUserData(userData)
        setUserData(userData)
        setIsRegistred(true)
    }

    return (
    <div>
        {/* <Test1>
            <h1>Hello</h1>
            <h5>Bye</h5>
        </Test1> */}
        <DarkThemeToggle>
            <RegisterPage/>
        </DarkThemeToggle>
        {/* { 
            isRegistred  ? <UserPage userData={userData}/> : <RegisterPage handleData={handleData} />
        } */}
    </div>
    )
}

