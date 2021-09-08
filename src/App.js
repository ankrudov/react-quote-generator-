import React, { useState }from 'react';
import styled, { ThemeProvider } from 'styled-components';
import DenseAppBar from './components/header';
import QuoteCard from './components/card';
import { lightTheme, darkTheme, GlobalStyles } from './components/themes';
import Button from '@material-ui/core/Button';

const StyledApp = styled.div`
  color: ${(props)=> props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");
    
    const themeToggler = ()=>{
        theme === "light"? setTheme("dark"): setTheme("light");
    };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <DenseAppBar/>
        <QuoteCard/>
        <GlobalStyles/>
        <StyledApp>
        <Button variant="outlined" color="primary" onClick={()=> themeToggler()}>Toggle Theme</Button>
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default App;
