import { useState } from "react";

export default function DarkThemeToggle ({children}){
    const [isDark, setIsDark]=useState(false)

    const handleCheckBoxValue=()=>{
        setIsDark(!isDark)
    }

    return(
        <div>
            <label>
                Change Theme
                <input type="checkbox" onChange={handleCheckBoxValue}/>
            </label>
            {
                isDark ? <div className="dark-child">{children}</div>:<div>{children}</div>
            }
        </div>
    )
}