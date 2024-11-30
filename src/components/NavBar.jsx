import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// console.log("username is: ", res.data.body)
// console.log("token is: ", res.data.headers.Authorization[0])

const loginUrl = "http://localhost:8080/api/auth/login"
const localStorageAuthKey = "authKey"

export default function NavBar() {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginButtonText = !!isLoggedIn ? "Logout" : "Login";

    const login = async () => {
        const credentials = { username, password}
        const res = await axios.post(loginUrl, credentials, { headers: { 'Access-Control-Allow-Origin': 'http://localhost:5173' } })
        console.log(res)
        if (res.data.statusCodeValue === 401) {
            // Unhappy path
            alert("Login failed: Incorrect username and/or password")
        } else {
            // Happy path
            setIsLoggedIn(true)
            setUsername("")
            setPassword("")
            window.localStorage.setItem(localStorageAuthKey, res.data.headers.Authorization[0]);
        }
    }

    const logout = () => {
        window.localStorage.setItem(localStorageAuthKey, "");
        setIsLoggedIn(false)
        navigate("/")
    }

    const handleLogin = () => {
        if (isLoggedIn) {
            logout()
        } else {
            login()
        }
    }

    const updateUsername = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    const updatePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div className="flex justify-between m-4 p-4 bg-blue-700/50 rounded-md text-white">
            <div> <span className="text-black font-bold">Assignment Tracker</span></div>
            <nav className="flex gap-4">
                {!isLoggedIn && <input type="text" placeholder="username" onChange={updateUsername} className="text-black" value={username}/>}
                {!isLoggedIn && <input type="password" placeholder="password" onChange={updatePassword} className="text-black" value={password}/>}
                <button onClick={handleLogin}>{loginButtonText}</button>
                <Link className="hover:text-black" to="/">Home</Link>
                {isLoggedIn && <Link className="hover:text-black" to="/assignments">Assignments</Link>}
            </nav>
        </div>
    );
}