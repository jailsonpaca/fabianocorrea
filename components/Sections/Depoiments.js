import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import { useMediaQuery } from '@material-ui/core';
import image from "../../assets/img/avatar.jpg";
import Button from "../Button.js";
import ScheduleIcon from '@material-ui/icons/Schedule';

import styles from "../../assets/jss/material-kit-react/views/componentsSections/depoimentsStyle.js";

const useStyles = makeStyles(styles);

export default function Depoiments() {
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
          <GridContainer style={{flexWrap:`${isSmall ?('wrap'):('nowrap')}`}}>
            <GridItem xs={12} sm={3} md={4} className={classes.itemGrid}>
              <div className={classes.card} >
                <h1>Maria joana de souza</h1>
                <h2><i>Professora</i></h2>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                /><br />
                <p><strong>"</strong>Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf
                oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si werwrzxc.<strong>"</strong></p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={3} md={4} className={classes.itemGrid}>
              <div className={classes.card} >
                <h1>José antônio da silva</h1>
                <h2><i>Funcionário Público</i></h2>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                /><br />
                <p><strong>"</strong>Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf
                oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si zxertertc.<strong>"</strong></p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={3} md={4} className={classes.itemGrid}>
              <div className={classes.card} >
                <h1>Mario ferreira dos santos</h1>
                <h2><i>Vendedor</i></h2>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                /><br />
                <p><strong>"</strong>Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf
                oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si zxcasdasd.<strong>"</strong>
                </p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={3} md={4} className={classes.itemGrid}>
              <div className={classes.card} >
                <h1>Mariana de souza</h1>
                <h2><i>Enfermeira</i></h2>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                /><br />
                <p><strong>"</strong>Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf
                oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si zxhhghghghc.<strong>"</strong></p>
              </div>
            </GridItem>
          </GridContainer>
          </div>
          <div className={classes.space50} />
          <Button color="success" className={classes.btnAgendar} size="lg">
                <ScheduleIcon  className={classes.icons}/> Agende Já!
          </Button>
        
      </div>
    </div>
  );
}
