/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import Link from 'next/link'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { useMediaQuery } from '@material-ui/core';
// @material-ui/icons
import { Help, PersonPinCircle, WhatsApp, LiveTv, Mms,Facebook,Instagram } from "@material-ui/icons";
// core components
import CustomDropdown from "../CustomDropdown.js";
import Button from "../Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:450px)');
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={()=>document.getElementById('onlineID').scrollIntoView()}
          //href="https://fabianocorrea.com/meu-consultorio"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <PersonPinCircle className={classes.icons} fontSize="large"  /> Meu Consultório
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={()=>document.getElementById('onlineID').scrollIntoView()}
          //href="#onlineID"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <WhatsApp className={classes.icons} fontSize="large" /> Consulta por WhatsApp
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://fabianocorrea.com/lives"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <LiveTv className={classes.icons} fontSize="large"  /> LIVES
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://fabianocorrea.com/blog"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Mms className={classes.icons} fontSize="large"  /> BLOG
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="O que faço?"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Help}
          dropdownList={[
            <Link href="/hipnose" className={classes.dropdownLink}>
              HIPNOSE
            </Link>,
            <Link href="/marketing" className={classes.dropdownLink}>
              MARKETING
            </Link>,
            <Link href="/treinamentos" className={classes.dropdownLink}>
              TREINAMENTOS
            </Link>,
            <Link href="/coaching" className={classes.dropdownLink}>
              COACHING
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Me acompanhe no Facebook"
          placement={typeof window != 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/fabiano.machadocorrea"
            target="_blank"
            className={classes.navLink}
          >
            <Facebook className={classes.icons} />{isSmall && (' Facebook')}
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Me siga no instagram"
          placement={typeof window != 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/fabianocorrea26/"
            target="_blank"
            className={classes.navLink}
          >
            <Instagram className={classes.icons} />{isSmall && (' Instagram')}
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
