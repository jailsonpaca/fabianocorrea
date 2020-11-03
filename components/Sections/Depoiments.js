import React from "react";
// @material-ui/core components
import { makeStyles, Link } from "@material-ui/core";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import { useMediaQuery } from '@material-ui/core';
import Button from "../Button.js";
import ScheduleIcon from '@material-ui/icons/Schedule';

import styles from "../../assets/jss/material-kit-react/views/componentsSections/depoimentsStyle.js";

const useStyles = makeStyles(styles);

export default function Depoiments({ depoiments = [] }) {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:450px)');
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h1>Depoimentos</h1>
          </div>
          <h2 className={classes.subTitle}>A palavra de quem já fez:</h2>
          <br /> 
          <GridContainer spacing={isSmall ?(0):(4)} className={classes.depoimentsContainer}>
            {depoiments.map((depoiment, i) => (
              <GridItem key={i} xs={12} sm={3} md={4} className={classes.itemGrid}>
                <div className={classes.card} >
                  <h1>{depoiment.name}</h1>
                  <h2><i>{depoiment.job}</i></h2>
                  <div className={classes.imageContainer}>
                    <img
                      src={depoiment.image.src}
                      alt={"depoimento fabiano correa"+depoiment.job}
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgFluid
                      }
                    />
                  </div>
                  <br />
                  <p><strong>"</strong>{depoiment.description}<strong>"</strong></p>
                </div>
              </GridItem>
            ))}            
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <Button color="success" className={classes.btnAgendar} size="lg"
          href="https://api.whatsapp.com/send?phone=5548999673317&text=Ol%C3%A1%20Fabiano%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20sua%20consulta%20de%20Hipnose">
          <ScheduleIcon className={classes.icons} /> Agende Já!
          </Button>
      </div>
    </div>
  );
}
