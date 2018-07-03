import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <h3>Our Application Is Alive</h3>
    </div>
  );
};

render(<App/>, document.getElementById('app'));
