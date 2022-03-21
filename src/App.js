import logo from './logo.svg';
import GlobalStyle from './createGlobal'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { About, Main, Blog, Work, Skills } from './components'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/skills' element={<Skills/>} />
        </Routes>
      </ThemeProvider >
        
    </>
  );
}

export default App;
