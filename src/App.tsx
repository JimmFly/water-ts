import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { cupsAtom, fullCupAtom, percentAtom, resetAtom } from "./store/atom";
import {
  Cup,
  Cups,
  CupSmall,
  Percentage,
  Remained,
  Reset,
  Small,
  Span,
  Water,
} from "./styles/styled";

function App() {
  const [cups] = useAtom(cupsAtom);
  const [percent] = useAtom(percentAtom);
  const [, setFullCups] = useAtom(fullCupAtom);
  const [, resetCups] = useAtom(resetAtom);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };
  console.log(i18n.language);
  return (
    <Water>
      <h1>{t("喝水统计")}</h1>
      <h3>{t("目标：2L")}</h3>
      <Cup>
        <Remained
          id="remained"
          style={percent === 8 ? { height: "0px" } : { height: "auto" }}
        >
          <Span id="liters"></Span>
          <Small>剩余{(2 * (100 - percent * 12.5)) / 100}L</Small>
        </Remained>
        <Percentage
          id="percentage"
          style={
            percent === 0
              ? { display: "none" }
              : { height: `${percent * 32.5}px ` }
          }
        >
          {percent * 12.5}%
        </Percentage>
      </Cup>
      <p className="text">选择你喝了几杯水</p>
      <Cups>
        {cups.map((item) => {
          const { id, isFull } = item;
          return (
            <CupSmall
              isFull={isFull}
              key={id}
              onClick={(e) => {
                setFullCups(id);
              }}
            >
              250 ml
            </CupSmall>
          );
        })}
      </Cups>
      <Reset onClick={resetCups}>重置</Reset>
      <h2>{t("title")}</h2>
      <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p>
      <p>{t("description2.part1")}</p>
      <p>{t("description2.part2")}</p>
      <p>{t("description2.partgg")}</p>
      <button onClick={changeLanguage("en")}>English</button>
      <button onClick={changeLanguage("zh")}>简体中文</button>
    </Water>
  );
}

export default App;
