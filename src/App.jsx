import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Brands from './components/Brands';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Brands />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
