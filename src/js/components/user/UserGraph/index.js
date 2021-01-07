import "./UserGraph.scss";
import graphData from "../../../../assets/graph.json";
import { getInbodyPoint, getValue } from "../../../utils";

const UserGraph = (function () {
  const { weight, height, gender } = getValue();
  const inbodyPoint = getInbodyPoint(weight, height, gender);

  const graph = document.createElement("div");
  graph.classList.add("graph");

  const container = document.createElement("div");
  container.classList.add("graph__container");

  const graphTitle = `<h3 class="graph__title">내 인바디 랭킹</h3>`;

  const graphFigure = document.createElement("div");
  graphFigure.classList.add("graph__figure");

  const activeIndex = Math.floor(inbodyPoint / (100 / graphData.data.length));
  graphData.data.forEach((item, i) => {
    const stick = `<div class="graph__figure-stick ${
      activeIndex === i ? "active" : ""
    }" id="stick-${i}" style="height: ${item.score * 2}px"></div>`;
    graphFigure.insertAdjacentHTML("beforeend", stick);
  });

  const graphCategory =
    `<div class="graph__category">` +
    `<span>낮음</span>` +
    `<span>평균(67점)</span>` +
    `<span>높음</span>` +
    `</div>`;

  const pointTable =
    `<div class="graph__point">` +
    `<div>` +
    `<span>내 인바디점수</span>` +
    `<p>${inbodyPoint || "-"}점</p>` +
    `</div>` +
    `<div>` +
    `<span>랭킹</span>` +
    `<p>상위 18%</p>` +
    `</div>` +
    `</div>`;

  container.insertAdjacentHTML("beforeend", graphTitle);
  container.appendChild(graphFigure);
  container.insertAdjacentHTML("beforeend", graphCategory);
  container.insertAdjacentHTML("beforeend", pointTable);
  graph.appendChild(container);

  return graph;
})();

export default UserGraph;
