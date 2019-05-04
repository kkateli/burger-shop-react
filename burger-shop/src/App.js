import React from 'react';

import './App.css';
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Container/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
      <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
