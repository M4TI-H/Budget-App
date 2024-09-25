import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages/mainPage';
import LoginPage from './pages/loginPage.js';
import theme from './theme/theme.ts';

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/login" element={<LoginPage />}/>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
