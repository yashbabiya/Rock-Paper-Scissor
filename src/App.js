import React, { useEffect, useState } from "react";
import "./styles.css";
let rock = "https://static.thenounproject.com/png/6270-200.png";
let paper =
  "https://desight.pro/upload/img/linerix-free/paper-577ac11b97cbc-big.png";
let scissor = "https://static.thenounproject.com/png/31725-200.png";
export default function App() {
  let [k, setk] = useState(0);
  let [usr, setusr] = useState({ n: 0, img: rock });
  let [w, setw] = useState({ po: "draw", m: ms, c: cs });
  let [im, setim] = useState(rock);
  let [ms, setms] = useState(0);
  let [cs, setcs] = useState(0);
  function change() {
    setk(Math.floor(Math.random() * 3) + 1);
  }
  function r() {
    setusr({ n: 1, img: rock });
    change();
  }
  function p() {
    setusr({ n: 2, img: paper });
    change();
  }
  function s() {
    setusr({ n: 3, img: scissor });
    change();
  }
  function win() {
    if (k === usr.n) {
      setw({ po: "draw", m: ms, c: cs });
    } else if ((usr.n === 3 && k === 2) || (usr.n === 1 && k === 3)) {
      setw({
        po: "You Win",
        m: ms + 1,
        c: 0
      });
    } else if (usr.n > k && usr.n != 3) {
      setw({
        po: "You Win",
        m: ms + 1,
        c: 0
      });
    } else {
      setw({
        po: "You Lose",
        m: 0,
        c: cs + 1
      });
    }
  }
  useEffect(() => {
    if (k === 1) {
      setim(rock);
    }
    if (k === 2) {
      setim(paper);
    }
    if (k === 3) {
      setim(scissor);
    }

    win();
  });
  return (
    <div className="App">
      <div className="cent">
        <div className="imgs">
          {w.po}
          <div className="you">
            <img src={usr.img} alt={usr.n} />
          </div>
          <div className="mid">
            <button onClick={r}>Rock</button>
            <button onClick={p}>Paper</button>
            <button onClick={s}>Scissor</button>
            <br />
          </div>
          <div className="computer">
            <img src={im} alt={k} />
          </div>
          <div className="span">
            {w.m}-{w.c}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
