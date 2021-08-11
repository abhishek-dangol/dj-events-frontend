import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { API_URL } from '@/config/index';


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [error, setError] = useState(null);

    // Register User
    const register =  async ({user}) => {

    }

    // Login User
    const login = async ({ email:identifier, password }) => {
        
    }

    // Logout User
    const logout = async () => {

    }

    // Check if user is logged in
    const checkUserLoggedIn = async (user) => {

    }

    return (
        <AuthContext.Provider value={{user, error, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;