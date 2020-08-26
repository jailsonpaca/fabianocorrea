/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import Button from "./Button.js";
import { YouTube, Facebook, Instagram } from "@material-ui/icons";

import styles from "../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Me acompanhe nas redes sociais:</h3>
          </GridContainer>
          <Button color="youtube">
            <YouTube className={classes.socials} />
            Assista
          </Button>
          <Button color="facebook" >
            <Facebook className={classes.socials} />
            Curta
          </Button>
          <Button color="instagram">
            <Instagram className={classes.socials} />
            Siga
          </Button>

        </div>

        <div className={classes.left}>
        Site Desenvolvido Por 
          <a
            href="https://japps.com"
            className={aClasses}
            target="_blank"
          >
             Japps -  Mídia e Tecnologia.
          </a>
        </div>
        <div className={classes.right}>
        Copyright &copy; {1900 + new Date().getYear()}, Todos os Direitos Reservados.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
