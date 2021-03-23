import React from 'react'
import { createGlobalStyle } from 'styled-components'
import StyledWrapper from './app.elements'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    /* CSS variables can go here */
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <p>
          Edit
          {' '}
          <em>src/App.js </em>
          {' '}
          and save to reload—
        </p>
        <strong>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </strong>
      </StyledWrapper>
    </>
  )
}

export default App
