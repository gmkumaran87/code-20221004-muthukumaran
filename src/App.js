import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Header from './pages/header/Header';
import Theme from './styles/Theme';
import Explore from './pages/explore/Explore';
import AboutUs from './pages/aboutUs/AboutUs';
import Navbar from './pages/header/components/Navbar';
import Footer from './components/Footer';

function App() {
  const search = useLocation();
  return (
    <Theme>
      <GlobalStyles />
      {search.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route element={<Layout />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
      <Footer />
    </Theme>
  );
}

export default App;
