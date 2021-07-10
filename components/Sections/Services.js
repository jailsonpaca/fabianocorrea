import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/servicesStyle.js";

const useStyles = makeStyles(styles);
const treatments = [
  "Agressividade",
  "Ansiedade em geral",
  "Alcoolismo",
  "Baixa Autoestima",
  "Compulsão Alimentar",
  "Compulsão por Compras",
  "Depressão",
  "Desmotivação",
  "Dificuldade de Falar em Público",
  "Dificuldade de Concentração",
  "Estresse",
  "Imunologia",
  "Manias",
  "Medo de Dirigir",
  "Medo de Avião",
  "Medos em geral",
  "Obesidade",
  "Pânico",
  "Performance Profissional",
  "Somatização (problemas físicos gerados por fator psicológico)",
  "Traumas",
  "Tabagismo",
  "Timidez",
  "TOC",
  "Dentre outras muitas possibilidades.",
];

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Serviços</h1>
        </div>
        <div className={classes.space70} />
        <div className={classes.cardContainer}>
          <div
            className={classes.card}
            style={{ background: "rgb(255, 0, 0)" }}
          >
            <span></span>
            <h1>
              Hipnose <strong>NÃO</strong> é:
            </h1>
            <br />
            <p>
              * Em hipnose você confessa seus segredos
              <br />
              * O hipnoterapeuta pode manipular cliente
              <br />
              * O cliente não esta consciente e dorme durante a hipnose
              <br />
              * Hipnose é místico e espiritual
              <br />
            </p>
          </div>
          <div className={classes.card}>
            <span></span>
            <h1>
              Hipnose <strong>É</strong>:
            </h1>
            <br />
            <p>
              * O paciente só compartilha o que deseja
              <br />
              * Cabe 100% ao paciente aceitar ou não as sugestões
              <br />
              * O cliente está em alerta e consciente durante todo processo
              <br />
              * A hipnose é um estado de alta concentração e relaxamento, é um
              estado da mente
              <br />
            </p>
          </div>
        </div>
        <div className={classes.space70} />
        <div className={classes.title}>
          <h2>Possibilidades de Tratamentos:</h2>
        </div>
        <List className={classes.treatmentsContainer}>
          {treatments.map((e, i) => (
            <ListItem key={i} button className={classes.treatment}>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary={e} className={classes.treatmentText} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
