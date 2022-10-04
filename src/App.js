import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles, { theme } from './styles/GlobalStyles';
import Layout from './components/Layout';
import Header from './pages/header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Header />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
