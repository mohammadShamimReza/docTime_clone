import { createContext } from "react";
import UseFirebase from "../../Hooks/UseFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ childern }) => {
    const allContexts = UseFirebase();
    return (
        <AuthContext.Provider value={allContexts}> { childern}</AuthContext.Provider>
    )
}

export default AuthProvider;