import { useState } from 'react'
import LocalStorageService from '../../services/LocalStorageService'
import RegisterPage from '../RegisterPage'
import UserPage from '../UserPage'
import DarkThemeToggle from '../DarkThemeToggle'

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
        <DarkThemeToggle>
        { 
            isRegistred  ? <UserPage userData={userData}/> : <RegisterPage handleData={handleData} />
        }
        </DarkThemeToggle>
    </div>
    )
}

