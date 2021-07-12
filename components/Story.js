import React, { useEffect, useState, Fragment } from "react";
//import 'assets/css/story.css';
//import 'assets/scss/story.scss';
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { useMediaQuery } from "@material-ui/core";

const timer = 3000; // 3 segundos
const timerLoad = 10;
const maxLoad = 3000;
const maxIndex = 5;

export default function Story() {
  const colors = ["green", "blue", "yellow", "grey", "blue", "green"];
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(0);
  const [load, setLoad] = useState(0);
  const [next, setNext] = useState(false);
  const card = [
    {
      title: "Hipnoterapia",
      description: "Ferramenta terapêutica rápida e eficiente para sua mente.",
    },
    {
      title: "Problemas Psicológicos",
      description:
        "Ajuda em seus problemas psicológicos sempre visando o bem estar Pessoal.",
    },
    {
      title: "Inteligência Emocional",
      description:
        "Muito importante nos dias atuais para melhor trabalhar, viver e conviver.",
    },
    {
      title: "Coaching",
      description:
        "Metodologia moderna para te ajudar a conquistar seus objetivos pessoais e profissionais",
    },
    {
      title: "Marketing",
      description: "Te ajudando a vender mais e a promover seu negócio.",
    },
    {
      title: "Treinamentos",
      description:
        "Ensinando voce a falar em público, perder aqueles kilinhos e conquistar aquela habilidade desejada.",
    },
  ];

  function changeHover(change) {
    console.log("hover: " + change);
    setHover(change);
  }
  function handleClick() {
    console.log("clicou: " + index + " load: " + load);
    //setLoad(3000);
    //changeHover(false);

    setNext(true);
    if (index < maxIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMouseEnter() {
    if (!isSmall) {
      changeHover(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (!hover) {
        if (next) {
          /*if (index < maxIndex) {
              setIndex(index+1);
            } else {
              setIndex(0);
            }*/
          setLoad(0);
          setNext(false);
        } else {
          if (load < maxLoad) {
            setLoad(load + 15);
          } else {
            setLoad(0);
            if (index < maxIndex) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          }
        }
      }
    }, timerLoad);
  });

  const isSmall = useMediaQuery("(max-width:450px)");
  return (
    <div
      className="story"
      onMouseLeave={() => {
        changeHover(false);
      }}
      onMouseEnter={() => {
        handleMouseEnter();
      }}
    >
      <div className="pause">
        <div className="progress-container">
          <div
            style={{
              animationDuration: `${timer}ms`,
              animationPlayState: `${hover ? "paused" : ""}`,
            }}
            className={`progress ${index == 0 ? "active" : ""}`}
          ></div>
          <div
            style={{
              animationDuration: `${timer}ms`,
              animationPlayState: `${hover ? "paused" : ""}`,
            }}
            className={`progress ${index == 1 ? "active" : ""}`}
          ></div>
          <div
            style={{
              animationDuration: `${timer}ms`,
              animationPlayState: `${hover ? "paused" : ""}`,
            }}
            className={`progress ${index == 2 ? "active" : ""}`}
          ></div>
          <div
            style={{
              animationDuration: `${timer}ms`,
              animationPlayState: `${hover ? "paused" : ""}`,
            }}
            className={`progress ${index == 3 ? "active" : ""}`}
          ></div>
          <div
            style={{
              animationDuration: `${timer}ms`,
              animationPlayState: `${hover ? "paused" : ""}`,
            }}
            className={`progress ${index == 4 ? "active" : ""}`}
          ></div>
          <div
            style={{
              animationDuration: `${timer}ms`,
              animationPlayState: `${hover ? "paused" : ""}`,
            }}
            className={`progress ${index == 5 ? "active" : ""}`}
          ></div>
        </div>

        <div className="status">
          <div className="not-hovered">
            <TouchAppIcon /> <PauseIcon />
          </div>
          <div className="hovered">
            <TouchAppIcon /> <PlayArrowIcon />
          </div>
        </div>
        <div className="container">
          {!isSmall ? (
            <Fragment>
              {card.map((e, i) => (
                <div
                  key={i}
                  className={`card ${colors[i]} ${index == i ? "hover" : ""}`}
                  onClick={() => handleClick(i)}
                >
                  <span></span>
                  <h1>{e.title}</h1>
                  <p>{e.description}</p>
                </div>
              ))}
            </Fragment>
          ) : (
            <div
              className={`card ${colors[index]} hover`}
              onClick={() => handleClick()}
            >
              <span></span>
              <h1>{card[index].title}</h1>
              <p>{card[index].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
