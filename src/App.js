import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Header from './pages/header/Header';
import Theme from './styles/Theme';
import Explore from './pages/explore/Explore';
import AboutUs from './pages/aboutUs/AboutUs';
import Navbar from './pages/header/components/Navbar';

function App() {
  const search = useLocation();
  return (
    <Theme>
      <GlobalStyles />
      {search.pathname !== '/' && <Navbar />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Header />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Theme>
  );
}

export default App;
