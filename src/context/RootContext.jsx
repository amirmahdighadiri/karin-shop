import React from 'react';
import AppProvider, {AppContext} from "./AppContext.jsx";
import AuthContext from "./AuthContext.jsx";
import AuthProvider from "./AuthContext.jsx";

function RootContext({children}) {
    return (
        <AuthProvider>
            <AppProvider>
                {children}
            </AppProvider>
        </AuthProvider>
    );
}

export default RootContext;