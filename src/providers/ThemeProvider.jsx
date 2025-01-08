import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Initialize dark mode state from localStorage or default to false
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    // Update the dark mode class on the root element and save to localStorage
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    // Context value to provide state and updater function
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;