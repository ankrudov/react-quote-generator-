import React, { useState, useEffect }from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { imgArr } from './utils/randomImg';
import DenseAppBar from './components/header';
import QuoteCard from './components/card';

const Title = styled.h1`
  color: blue !important;
`;

function App() {
  const [theme, setTheme] = useState("https://images5.alphacoders.com/509/thumb-1920-509402.jpg");
  const [isInitialRender, setIsInitialRender] = useState(true);
  const randomImage = ()=>{
    const randImg = imgArr[Math.floor(Math.random() * imgArr.length)];

    setTheme(randImg);
    return randImg
  };

  const GlobalStyle = createGlobalStyle`
  body{
    background-color:black;
    background-image: url(${randomImage});
    width: 100vw;
    height:100vh;
    transition: all 0.70s linear;
    background-size: contain;
    background-repeat: no-repeat; 
    background-position: center, center;
  }
`

  return (
    <div className="App">
      <GlobalStyle/>
        <DenseAppBar/>
        <QuoteCard/>
    </div>
  );
}

export default App;
