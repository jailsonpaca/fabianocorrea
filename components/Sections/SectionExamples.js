import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link'
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Button from "../Button.js";

import landing from "../../assets/img/landing.jpg";
import profile from "../../assets/img/profile.jpg";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
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
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
