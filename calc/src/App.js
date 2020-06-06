import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from './components/Toolbar';
import Graph from './components/Graph';
import defaultConfig from './constants/defaultConfig';

import { getCircles } from "./utils/calculations";

const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
const circles = primes.reduce((arr, prime)=>arr.concat(getCircles(prime,100)), []);

function App() {
  const [config, setConfig] = useState(defaultConfig);
  
  return (
    <Container>
      <Toolbar onChange={setConfig}/>
      <Graph circles={circles} />
    </Container>
  );
}

export default App;
