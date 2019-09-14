import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <Link className="header-brand" to="/"> EPIC mail</Link>
    <nav>
      <ul>
        <li>
          <Link to="/signup">
            {' '}
            <h1>Sign Up</h1>
            {' '}
          </Link>
        </li>
        <li>
          <Link to="/login"><h1>Sign in</h1></Link>
        </li>
      </ul>
    </nav>
  </header>
);
