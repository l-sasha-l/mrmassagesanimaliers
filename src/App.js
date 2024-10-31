import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Presentation from './components/presentation';
import PricingEquin from './components/PricingEquin';
import PricingCanin from './components/pricingcanin';
import Contact from './components/contact';
import Map from './components/map';

function App() {
  return (
    <div>
      <Header />
      {/* Main */}
      <Presentation />
      {/* <Pricing /> */}
      <PricingEquin/>
      <PricingCanin />
     {/* <Contact />
      <Map /> */}
      {/* Rajouter footer */}
    </div>
  );
}

export default App;
