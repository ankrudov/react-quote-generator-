import React, { useState, useEffect }from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import DenseAppBar from './components/header';
import QuoteCard from './components/card';
import themeSelector from './theme/themeSelector';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  // grab selected themes 
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(()=>{
    setSelectedTheme(theme);
  },[themeLoaded]);

  // loadFonts with webfont
  useEffect(()=>{
    WebFont.load({
      google:{
        families: getFonts()
      }
    })
  });
    
  return (
    <div>
      <DenseAppBar/>
      <>
        {
          themeLoaded && <ThemeProvider theme={selectedTheme}>
            <GlobalStyles/>
            <Container style={{fontFamily: selectedTheme.font}}>
              <QuoteCard/>
            </Container>
          </ThemeProvider>
        }
      </>
    </div>
  );
}

export default App;
