import React from 'react';
import './App.css';
import Header from './Header';
import Headline from './Headline';
import Aside from './Aside';
import ItemList from './ItemList';
import BoxList from './BoxList';
import Footer from './Footer';

function App() {
  return (
    <div id="layout">
      <Header />

      <main>
        <section id="content">
          <Headline />
           <ItemList />
        </section>

        <Aside />

        <BoxList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
