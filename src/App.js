import React from "react";
import Header from "./components/Header";
import { StyledContainer } from "./components/Styles/StyledContainer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Styles/GlobalStyle";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";




/* Theme Settings ========================== */
const theme = {
  colors: {
    header: 'rgb(224, 241, 255)',
    body: 'white',
    footer: '#002240',
    h1: 'black',
  },
  mobile: '768px',
}
/* Theme Settings ========================== */





/* Main App ================================ */
function App() {
  return (
      <ThemeProvider theme = {theme}>
        <>
          <GlobalStyle />
          <Header />    
          <StyledContainer>

            {content.map( (item, index) => (
              <Card key={index} item={item}/>
            ))}
              

          </StyledContainer>
          <Footer />
        </>
      </ThemeProvider>      
  );
}
/* Main App ================================ */














export default App;
