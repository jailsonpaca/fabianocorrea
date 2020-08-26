import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Button from "../Button.js";
import treinamentos from "../../assets/img/treinamentos.png";
import fabiano from "../../assets/img/fabiano.png";
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import landing from "../../assets/img/landing.jpg";
import profile from "../../assets/img/profile.jpg";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/courseStyle.js";

const useStyles = makeStyles(styles);

export default function Courses() {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('600','800'));
  return (
    <div className={classes.section}>
      <div className={classes.container} > 
      <GridContainer justify="center" alignContent="center" alignItems="center">
          <GridItem xs={12} sm={isTablet ? (12) : (6)}  md={8} className={classes.textCenter}>
            <h2>Cursos e Treinamentos</h2>
            <h4>
              Em minha jornada como hipnólogo e psicanalista adquiri experiência em marketing e coaching,
              promovendo cursos na área de hipnose voltada não só para a aréa de saúde mental
              mas também em inteligência emocional na hora da entrevista de emprego,
              na administração de funcionários, no emagrecimento e na gestão de finanças.
          </h4>
          <div className={classes.space20} />
          </GridItem>
      
        <GridItem xs={12} sm={isTablet ? (12) : (6)}  md={4} >
        <img className={classes.fabiano} src={fabiano} alt="treinamentos - fabiano correa hipnocoach"/>
          {/*<img className={classes.quadro} src={treinamentos} alt="treinamentos - fabiano correa hipnocoach"/>*/}
          </GridItem>
          {/*<GridItem xs={12} sm={12} md={6}>
            <Link href="landing-page" className={classes.link}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View landing page
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
              </GridItem>*/}
        </GridContainer>
      </div>
    </div>);
}
