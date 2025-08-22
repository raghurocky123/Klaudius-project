import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error checking auth state:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      if (!email || !password) {
        return { success: false, message: "Email and password are required" };
      }

      if (!validateEmail(email)) {
        return {
          success: false,
          message: "Please enter a valid email address",
        };
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let existingUsers: any = (await AsyncStorage.getItem("allUsers")) || "";
      existingUsers = existingUsers ? JSON.parse(existingUsers) : [];

      const foundUser =
        Array.isArray(existingUsers) &&
        existingUsers.find((u: any) => u.email === email);

      if (!foundUser) {
        return { success: false, message: "Invalid email or password" };
      }

      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      };
      setUser(userData);
      await AsyncStorage.setItem("user", JSON.stringify(userData));

      return { success: true };
    } catch (error) {
      console.log({ error });
      return { success: false, message: "Login failed. Please try again." };
    }
  };

  const signup = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      if (!name || !email || !password) {
        return { success: false, message: "All fields are required" };
      }

      if (!validateEmail(email)) {
        return {
          success: false,
          message: "Please enter a valid email address",
        };
      }

      if (password.length < 6) {
        return {
          success: false,
          message: "Password must be at least 6 characters long",
        };
      }

      let existingUsers: any = (await AsyncStorage.getItem("allUsers")) || "";
      existingUsers = existingUsers ? JSON.parse(existingUsers) : [];

      const existingUser =
        Array.isArray(existingUsers) &&
        existingUsers.find((u: any) => u.email === email);

      if (existingUser) {
        return {
          success: false,
          message: "An account with this email already exists",
        };
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
      };
      existingUsers.push(newUser);
      setUser(newUser);
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      await AsyncStorage.setItem("allUsers", JSON.stringify(existingUsers));

      return { success: true };
    } catch (error) {
      return { success: false, message: "Signup failed. Please try again." };
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setUser(null);
      await AsyncStorage.removeItem("user");
      router.push("/auth/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
