import React, { Component } from 'react';

import '../../assets/styles/components/index.css';
import '../../assets/styles/components/auth.css';
import Header from '../Header';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <section className="index-banner">
            <div className="vertical-center">
              <h1>
                Connect to your family and friend via EPIC mail .
              </h1>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
