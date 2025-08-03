import React, { useState } from 'react';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  const themeStyles = {
    light: {
      backgroundColor: '#f8f9fa',
      color: '#212529'
    },
    dark: {
      backgroundColor: '#121212',
      color: '#f1f1f1'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{
        minHeight: '100vh',
        padding: '40px',
        ...themeStyles[theme]
      }}>
        <h2>Employee Management App</h2>
        <button
          onClick={toggleTheme}
          style={{
            padding: '10px 16px',
            border: 'none',
            borderRadius: '5px',
            marginBottom: '30px',
            cursor: 'pointer',
            backgroundColor: theme === 'dark' ? '#444' : '#ddd',
            color: theme === 'dark' ? '#fff' : '#000'
          }}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
