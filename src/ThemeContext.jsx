import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const mode = lightModeMediaQuery.matches ? 'light' : 'dark';

    const [theme, setTheme] = useState(mode);
    
    const toogleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};