import {createContext, useState, useEffect, useContext} from "react";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
// const swal = require('sweetalert2')

const AuthContext = createContext();

export { AuthContext }; // Exporting AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    

    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens")
            ? jwtDecode(localStorage.getItem("authTokens"))
            : null
    );


    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json();
        const decodedToken = jwtDecode(data.access);
        console.log(decodedToken.role); // This will log the user's role to the console


        if(response.status === 200){
            console.log("Logged In");
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
            // Redirect user to the appropriate dashboard based on their role
            console.log('Role:', decodedToken.role); // Add this line
            switch (decodedToken.role) {
                case 'admin':
                    navigate("/admin_dashboard")
                    break;
                case 'hirbod':
                    navigate("/hirbod_dashboard")
                    break;
                case 'province_boss':
                    navigate("/province_boss_dashboard")
                    break;
                case 'province_master':
                    navigate("/province_master_dashboard")
                    break;
                case 'coach':
                    console.log('Redirecting to /coach_dashboard'); // Add this line
                    navigate("/coach_dashboard")
                    break;
                case 'guest':
                    console.log('Redirecting to /dashboard');
                    navigate("/dashboard")
                    break;
                
            }
            

            } else {    
                console.log(response.status);
                console.log("there was a server issue");
                
            }
    }

    const registerUser = async (email, username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, username, password, password2
            })
        })
        if(response.status === 201){
            navigate("/login")
            
        } else {
            console.log(response.status);
            console.log("there was a server issue");
            
        }
    }
    const resetPassword = async (email) => {
        const response = await fetch("http://127.0.0.1:8000/api/password_reset/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ email })
        })
        if(response.status === 204){
            
        } else {
            console.log(response.status);
            console.log("there was a server issue");
            
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        navigate("/login")
        
    }

    const contextData = {
        user, 
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
        resetPassword
    }

    useEffect(() => {
        if (authTokens) {
            setUser(jwtDecode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )

}
export const useAuth = () => useContext(AuthContext);