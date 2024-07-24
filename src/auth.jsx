import { createContext, useContext, useState, useEffect, useMemo } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setLogin] = useState(!!token); // Derive isLogin from token

  const API = import.meta.env.VITE_APP_URI_API;
  const authorizationToken = `Bearer ${token}`;

  // function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setLogin(true);
      } else {
        setUser("");
        setLogin(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
      setUser("");
      setLogin(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    setUser("");
    setLogin(false);
    localStorage.removeItem("token");
  };

  const contextValue = useMemo(() => ({
    isLoggedIn: !!token,
    isLogin,
    setLogin,
    storeTokenInLS,
    LogoutUser,
    user,
    authorizationToken,
    isLoading,
    API,
  }), [token, isLogin, user, isLoading]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
