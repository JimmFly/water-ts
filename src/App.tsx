import { useAtom } from "jotai";
import { cupsAtom, fullCupAtom, resetAtom } from "./store/atom";
import "./styles/style.css";

function App() {
  const [cups] = useAtom(cupsAtom);
  const [, setFullCups] = useAtom(fullCupAtom);
  const [, resetCups] = useAtom(resetAtom);
  return (
    <div className="water">
      <h1>喝水统计</h1>
      <h3>目标：2L</h3>
      <div className="cup">
        <div className="remained" id="remained">
          <span id="liters"></span>
          <small>剩余2L</small>
        </div>
      </div>
      <p className="text">选择你喝了几杯水</p>
      <div className="cups">
        {cups.map((item) => {
          return (
            <div
              className={item.isFull ? "cup cup-small full" : "cup cup-small"}
              key={item.id}
              onClick={(e) => setFullCups(item.id)}
            >
              250 ml
            </div>
          );
        })}
      </div>
      <button className="reset" onClick={resetCups}>
        重置
      </button>
    </div>
  );
}

export default App;
