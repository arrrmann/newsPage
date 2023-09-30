import { useState } from "react";
import styles from './theme.module.css'
//styles-y object e  vori arjeqnery galis en css.module.css faylic


export default function DarkThemeToggle({ children }) {
    //etechildreni mej galis e 2-ic avel JSX, kampanyent, kam ayl inchvor mi ban, apa propsi-i children-y darnum e array vortex amen mi elementy arandzin object e
    //console.log(children)
    //console.log(styles)
    // {app: "theme_app__Gkd+6", darkTheme: "theme_darkTheme__-ifik", lightTheme: "theme_lightTheme__dURSP"}
    const [isDark, setIsDark] = useState(false)

    const handleCheckBoxValue = () => {
        setIsDark((prev) => !prev)
    }

    return (
        <div className={isDark ? styles.darkTheme + ' ' + styles.app : styles.lightTheme + ' ' + styles.app}>
            <label>
                Change Theme
                <input type="checkbox" checked={isDark} onChange={handleCheckBoxValue} />
            </label>

            {children}
        </div>
    )
}

//Children-i ogtagorcman 2 dzev
//1. nuyn dizaynov elementner, sakayn tarber kontentner
// <Test1> <h1>Hello</h1> <h5>Bye</h5> </Test1> //1-in block
// <Test1> <p>Bye</p> <ul>  <li>First</li> <li>Second</li> <li>Third</li>  </ul> </Test1> //2-rd block

//2.erb unen nuyn kontenty sakayn tarber dizaynner petq e tal
//orinaky verevum