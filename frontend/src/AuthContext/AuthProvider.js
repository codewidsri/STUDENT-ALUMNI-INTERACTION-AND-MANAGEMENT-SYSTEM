import React, { createContext, useReducer } from "react";

export const AuthContext=createContext();

const initialstate={
    user : null,
    token : null,
    isauthenticated : false,
    error : null
}

function AuthReducer(state,action){
    
}

function AuthProvider({children}) {
    const [state,dispatch]=useReducer(AuthReducer,initialstate);
    return(
        <>
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export default AuthProvider;