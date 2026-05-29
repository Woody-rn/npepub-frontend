import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import App from './App.jsx'

const system = createSystem(defaultConfig, {
  globalCss: {
    'html, body': {
      backgroundColor: 'gray.900',
      color: 'white',
      margin: 0,
      padding: 0,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)