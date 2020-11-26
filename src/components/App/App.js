import React from 'react';
import FirstScreen from '../FirstScreen';
import ServiceCost from '../ServiceCost';
import { Footer, Header } from '../layouts';

function App() {
  return (
    <div>
      <Header/>
      <FirstScreen/>
      <ServiceCost/>
      <Footer/>
    </div>
  );
}

export default App;
