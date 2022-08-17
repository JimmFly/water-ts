import React from 'react';
import { useAtom } from "jotai";
import {cupAtom} from './store/atom';
import './styles/style.css';


function App() {
const [cup]=useAtom(cupAtom);
  return (
    <div className="water">
    <h1>提醒喝水器</h1>
    <h3>目标：2L</h3>
    <div className="cup">
        <div className="remained" id="remained">
          <span id="liters"></span>
          <small>剩余2L</small>
        </div>
    </div>
    <p className="text">选择你喝了几杯水</p>
    <div className="cups">
      {cup.map((item)=>{
        return (          <div
          className={item.isFull ? "cup cup-small full" : "cup cup-small"}
              id={item.id}
              key={item.id}
        >
          250 ml
        </div>)
      })}

    </div>
    <button
      className="reset"
    >
      重置
    </button>
  </div>
);
}

export default App;
