const QUIZ_SIZE = 5;
const STORAGE_KEY = "kyosobaQuiz.v1";

const HORSES = [
  {
    id: "deep-impact",
    name: "ディープインパクト",
    image: "images/horses/deep-impact.jpg",
    note: "クラシック三冠、天皇賞（春）、宝塚記念、ジャパンカップ。",
    credit: "Wikimedia Commons / Deep Impact 001.jpg",
  },
  {
    id: "orfevre",
    name: "オルフェーヴル",
    image: "images/horses/orfevre.jpg",
    note: "クラシック三冠と有馬記念2勝。",
    credit: "Wikimedia Commons / Orfevre20111225(2).jpg",
  },
  {
    id: "almond-eye",
    name: "アーモンドアイ",
    image: "images/horses/almond-eye.jpg",
    note: "牝馬三冠、ジャパンカップ2勝、天皇賞（秋）2勝。",
    credit: "Wikimedia Commons（公開写真を顔中心にトリミング）",
  },
  {
    id: "kitasan-black",
    name: "キタサンブラック",
    image: "images/horses/kitasan-black.jpg",
    note: "菊花賞、天皇賞春秋、ジャパンカップ、有馬記念連覇。",
    credit: "Wikimedia Commons / Kitasan-Black IMG 7729r R 20151025.JPG（トリミング）",
  },
  {
    id: "equinox",
    name: "イクイノックス",
    image: "images/horses/equinox.jpg",
    note: "天皇賞（秋）連覇、ジャパンカップ、有馬記念、ドバイシーマクラシック。",
    credit: "Wikimedia Commons / Equinox 2023 Tenno Sho (Autumn).jpg",
  },
  {
    id: "oguri-cap",
    name: "オグリキャップ",
    image: "images/horses/oguri-cap.jpg",
    note: "有馬記念、マイルチャンピオンシップ、安田記念。",
    credit: "Wikimedia Commons / Oguri Cap in Yushun Stallion station.jpg",
  },
  {
    id: "tokai-teio",
    name: "トウカイテイオー",
    image: "images/horses/tokai-teio.jpg",
    note: "皐月賞、日本ダービー、有馬記念。",
    credit: "Wikimedia Commons / Tokai Teio 20000923F01.jpg",
  },
  {
    id: "mejiro-mcqueen",
    name: "メジロマックイーン",
    image: "images/horses/mejiro-mcqueen.jpg",
    note: "菊花賞、天皇賞（春）連覇、宝塚記念。",
    credit: "Wikimedia Commons / Mejiro McQueen 20020722.jpg",
  },
  {
    id: "symboli-rudolf",
    name: "シンボリルドルフ",
    image: "images/horses/symboli-rudolf.jpg",
    note: "無敗のクラシック三冠、有馬記念連覇。",
    credit: "Wikimedia Commons / Symboli rudolf.jpg",
  },
  {
    id: "tm-opera-o",
    name: "テイエムオペラオー",
    image: "images/horses/tm-opera-o.jpg",
    note: "天皇賞春秋、ジャパンカップ、有馬記念。",
    credit: "Wikimedia Commons / TM Opera O.jpg",
  },
  {
    id: "gentildonna",
    name: "ジェンティルドンナ",
    image: "images/horses/gentildonna.jpg",
    note: "牝馬三冠、ジャパンカップ連覇、有馬記念。",
    credit: "Wikimedia Commons / Gentildonna Arima Kinen 2014(IMG2).jpg（トリミング）",
  },
  {
    id: "gold-ship",
    name: "ゴールドシップ",
    image: "images/horses/gold-ship.jpg",
    note: "皐月賞、菊花賞、有馬記念、天皇賞（春）、宝塚記念連覇。",
    credit: "Wikimedia Commons / Gold Ship Tenno Sho (Spring) 2015.jpg（トリミング）",
  },
  {
    id: "contrail",
    name: "コントレイル",
    image: "images/horses/contrail.jpg",
    note: "無敗のクラシック三冠、ジャパンカップ。",
    credit: "Wikimedia Commons / Contrail 2019 hopeful stakes honbaba nyujyou.jpg（トリミング）",
  },
  {
    id: "sodashi",
    name: "ソダシ",
    image: "images/horses/sodashi.jpg",
    note: "白毛馬として桜花賞とオークスを制した。",
    credit: "Wikimedia Commons / ヴィクトリアマイル ソダシ.jpg（トリミング）",
  },
  {
    id: "do-deuce",
    name: "ドウデュース",
    image: "images/horses/do-deuce.jpg",
    note: "日本ダービーと有馬記念。",
    credit: "Wikimedia Commons / Do Deuce Tokyo Yushun 2022(IMG2).jpg（トリミング）",
  },
  {
    id: "chrono-genesis",
    name: "クロノジェネシス",
    image: "images/horses/chrono-genesis.jpg",
    note: "秋華賞、有馬記念、宝塚記念。",
    credit: "Wikimedia Commons / Chrono Genesis (JPN) IMG 4796-1 20191013.jpg（トリミング）",
  },
  {
    id: "hearts-cry",
    name: "ハーツクライ",
    image: "images/horses/hearts-cry.jpg",
    note: "有馬記念、ドバイシーマクラシック。",
    credit: "Wikimedia Commons / Heart's Cry 20051225P01.jpg（トリミング）",
  },
  {
    id: "liberty-island",
    name: "リバティアイランド",
    image: "images/horses/liberty-island.jpg",
    note: "桜花賞とオークス。",
    credit: "Wikimedia Commons / Liberty Island Yushun Himba 2023(IMG1).jpg（トリミング）",
  },
  {
    id: "king-kamehameha",
    name: "キングカメハメハ",
    image: "images/horses/king-kamehameha.jpg",
    note: "NHKマイルカップと日本ダービー。",
    credit: "Wikimedia Commons / 2004-9-26-KingKamehameha.JPG（トリミング）",
  },
  {
    id: "efforia",
    name: "エフフォーリア",
    image: "images/horses/efforia.jpg",
    note: "皐月賞、天皇賞（秋）、有馬記念。",
    credit: "Wikimedia Commons / Efforia Satsuki Sho 2021(IMG1).jpg（トリミング）",
  },
];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const retryButton = document.querySelector("#retry-button");
const homeButton = document.querySelector("#home-button");
const startClear = document.querySelector("#start-clear");
const resultClear = document.querySelector("#result-clear");
const startRecord = document.querySelector("#start-record");
const progressLabel = document.querySelector("#progress-label");
const dots = document.querySelector("#dots");
const photo = document.querySelector("#horse-photo");
const credit = document.querySelector("#photo-credit");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const scoreText = document.querySelector("#score-text");
const resultMessage = document.querySelector("#result-message");
const bestScore = document.querySelector("#best-score");
const avgScore = document.querySelector("#avg-score");
const playCount = document.querySelector("#play-count");
const recentScores = document.querySelector("#recent-scores");
const summary = document.querySelector("#summary");
const creditList = document.querySelector("#credit-list");

let round = [];
let index = 0;
let score = 0;
let locked = false;
let answers = [];

function emptyStore() {
  return { best: 0, plays: 0, correct: 0, history: [] };
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore();
    const data = JSON.parse(raw);
    return {
      best: Number(data.best) || 0,
      plays: Number(data.plays) || 0,
      correct: Number(data.correct) || 0,
      history: Array.isArray(data.history) ? data.history.slice(0, 12) : [],
    };
  } catch {
    return emptyStore();
  }
}

function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function show(screen) {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

function messageFor(points) {
  if (points === 5) return "全問正解。名馬の顔がよく見えています。";
  if (points === 4) return "あと1問。かなりの眼力です。";
  if (points === 3) return "半分以上正解。人気馬の特徴がつかめてきました。";
  if (points === 2) return "2問正解。毛色と顔の印が次の手がかりです。";
  if (points === 1) return "1問正解。写真の顔立ちをもう一度見てみましょう。";
  return "今回は惜しかったです。サマリの写真で違いを確認できます。";
}

function renderStart() {
  const store = loadStore();
  if (store.plays === 0) {
    startRecord.hidden = true;
    startClear.classList.add("hidden");
    return;
  }
  const average = (store.correct / store.plays).toFixed(1);
  startRecord.hidden = false;
  startRecord.textContent = `自己ベスト ${store.best} / ${QUIZ_SIZE}　平均 ${average} / ${QUIZ_SIZE}　${store.plays}回`;
  startClear.classList.remove("hidden");
}

function renderDots() {
  dots.replaceChildren();
  round.forEach((_, dotIndex) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    if (answers[dotIndex]) {
      dot.classList.add("done");
      if (!answers[dotIndex].ok) dot.classList.add("miss");
    } else if (dotIndex === index) {
      dot.classList.add("current");
    }
    dots.append(dot);
  });
}

function renderQuestion() {
  const current = round[index];
  locked = false;
  progressLabel.textContent = `${index + 1} / ${round.length}`;
  renderDots();
  photo.src = current.horse.image;
  photo.alt = "名前を当てる競走馬の写真";
  credit.textContent = "Wikimedia Commons";
  feedback.hidden = true;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.classList.add("hidden");
  nextButton.textContent = index === round.length - 1 ? "結果を見る" : "次の問題";

  choices.replaceChildren();
  current.choices.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = label;
    button.addEventListener("click", () => answer(label));
    choices.append(button);
  });
}

function answer(label) {
  if (locked) return;
  locked = true;
  const current = round[index];
  const ok = label === current.horse.name;
  if (ok) score += 1;
  answers.push({
    id: current.horse.id,
    name: current.horse.name,
    image: current.horse.image,
    note: current.horse.note,
    credit: current.horse.credit,
    picked: label,
    ok,
  });

  choices.querySelectorAll(".choice").forEach((button) => {
    button.disabled = true;
    if (button.textContent === current.horse.name) button.classList.add("correct");
    if (button.textContent === label && !ok) button.classList.add("wrong");
  });

  photo.alt = current.horse.name;
  feedback.hidden = false;
  feedback.classList.add(ok ? "ok" : "ng");
  feedback.textContent = ok
    ? `正解。${current.horse.note}`
    : `不正解。正解は${current.horse.name}。${current.horse.note}`;
  nextButton.classList.remove("hidden");
  renderDots();
}

function buildRound() {
  const picked = shuffle(HORSES).slice(0, QUIZ_SIZE);
  const used = new Set(picked.map((horse) => horse.id));
  const pool = HORSES.filter((horse) => !used.has(horse.id));
  return picked.map((horse) => ({
    horse,
    choices: shuffle([horse.name, ...shuffle(pool).slice(0, 3).map((item) => item.name)]),
  }));
}

function finish() {
  const store = loadStore();
  const previousBest = store.best;
  store.plays += 1;
  store.correct += score;
  store.best = Math.max(store.best, score);
  store.history.unshift({
    at: Date.now(),
    score,
    total: QUIZ_SIZE,
  });
  store.history = store.history.slice(0, 12);
  saveStore(store);

  scoreText.textContent = `${score} / ${QUIZ_SIZE}`;
  const updated = score > previousBest && score > 0 ? "自己ベストを更新しました。" : "";
  resultMessage.textContent = `${messageFor(score)}${updated ? ` ${updated}` : ""}`;
  bestScore.textContent = `${store.best} / ${QUIZ_SIZE}`;
  avgScore.textContent = `${(store.correct / store.plays).toFixed(1)} / ${QUIZ_SIZE}`;
  playCount.textContent = String(store.plays);
  recentScores.hidden = false;
  recentScores.textContent = `最近の成績　${store.history.map((item) => item.score).join("、")}`;

  summary.replaceChildren();
  answers.forEach((item, itemIndex) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    const body = document.createElement("div");
    const badge = document.createElement("p");
    badge.className = `badge ${item.ok ? "ok" : "ng"}`;
    badge.textContent = item.ok ? "正解" : "不正解";
    const name = document.createElement("p");
    name.className = "name";
    name.textContent = `${itemIndex + 1}. ${item.name}`;
    const detail = document.createElement("p");
    detail.className = "detail";
    detail.textContent = item.ok ? item.note : `あなたの回答：${item.picked}`;
    body.append(badge, name, detail);
    li.append(img, body);
    summary.append(li);
  });

  creditList.replaceChildren();
  answers.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.credit}`;
    creditList.append(li);
  });

  show(resultScreen);
}

function start() {
  round = buildRound();
  index = 0;
  score = 0;
  answers = [];
  show(quizScreen);
  renderQuestion();
}

function clearRecords() {
  const store = loadStore();
  if (store.plays === 0) return;
  const ok = window.confirm("この端末に保存した成績を消去します。");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  renderStart();
  if (!resultScreen.classList.contains("hidden")) {
    bestScore.textContent = "0 / 5";
    avgScore.textContent = "-";
    playCount.textContent = "0";
    recentScores.hidden = true;
  }
}

startButton.addEventListener("click", start);
retryButton.addEventListener("click", start);
homeButton.addEventListener("click", () => {
  renderStart();
  show(startScreen);
});
startClear.addEventListener("click", clearRecords);
resultClear.addEventListener("click", clearRecords);
nextButton.addEventListener("click", () => {
  index += 1;
  if (index >= round.length) {
    finish();
    return;
  }
  renderQuestion();
});

renderStart();
