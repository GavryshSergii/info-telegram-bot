import React from 'react';
import FirstScreen from '../FirstScreen';
import ServiceCost from '../ServiceCost';
import Features from '../Features';
import JobDescriptionBot from '../JobDescriptionBot';
import { Footer, Header, LinkToBot } from '../layouts';



function App() {
  return (
    <div>
      <Header/>
      <FirstScreen/>
      <Features/>
      <JobDescriptionBot/>
      <ServiceCost/>
      <LinkToBot/>
      <Footer/>
    </div>
  );
}

export default App;
