import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Component() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.getElementById('root');

    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    toogleTheme();
  };

  return (
    <div className="card">
      <button onClick={handleChangeTheme}>
        Change Theme
      </button>
    </div>
  )
}
