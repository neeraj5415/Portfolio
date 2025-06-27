import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Experience from './Pages/Experience.jsx';
import Education from './Pages/Education.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx';
import Footer from './Pages/Footer.jsx';
import MoreAbout from './Brifhpages/DetailAbout.jsx'; // your full journey page
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';

function App() {
  return (
    <Router basename="/Portfolio">
      <Routes>
        {/* Homepage Route with all sections */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Full Journey Page */}
        <Route path="/more-about" element={<MoreAbout />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;