import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvide =({ children }) => {
    const [user, setUser] = useState();
    
    useInsertionEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("user_db");

        if (userToken && userStorage) {
            const hasUser = JSON.parse(userStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if(hasUser) setUser(hasUser[0]);
        }
    }, []);


    return <AuthContext.Provider>{children}</AuthContext.Provider>;
}