import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.css'

import MonsterBox from './components/MonsterBox'

ReactDOM.render(
  <React.StrictMode>
    <div className="view">
      <div className="viewbox">
        <MonsterBox />
      </div>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);