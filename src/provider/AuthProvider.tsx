import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

export interface User {
  id: number;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  login: (name: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const MOCK_USERS: User[] = [];

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (name: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = MOCK_USERS.find((u) => u.name === name);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return true;
    } else {
      const newUser = { id: MOCK_USERS.length + 1, name };
      setUser(newUser);
      MOCK_USERS.push(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No No !");
  }
  return context;
};
