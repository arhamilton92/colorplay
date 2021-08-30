import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.css'

import MonsterBox from './components/MonsterBox'
import StaticCanvas from './components/StaticCanvas'

ReactDOM.render(
  <React.StrictMode>
    <div className="view">
      <div className="viewbox">
        <MonsterBox />
        <div className="row u-margin-top-l">
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
        </div>
        <div className="row">
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
            <div className="col-1-of-4"><div><div className="monsters"><div className="monsters__box"><StaticCanvas /></div></div></div></div>
        </div>
      </div>

  </div>
  </React.StrictMode>,
  document.getElementById('root')
);