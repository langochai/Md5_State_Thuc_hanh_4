import {useState} from 'react'
import './App.css'

function App() {
    let [isLoggedIn, setLogged] = useState(false)
    let logInBtn = ()=>{
        setLogged(true)
    }
    let logOutBtn = ()=>{
        setLogged(false)
    }
    if(!isLoggedIn){
        return(
            <>
                <p>please log in</p>
                <button onClick={logInBtn}>log in</button>
            </>
        )
    } else {
        return(
            <>
                <p>now log the fk out!</p>
                <button onClick={logOutBtn}>log out</button>
            </>
        )
    }
}

export default App
