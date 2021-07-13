import image from "../assets/img/avatar.jpg";
import Button from "../components/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Facebook, Instagram, WhatsApp } from "@material-ui/icons";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LanguageIcon from "@material-ui/icons/Language";
import styles from "../assets/jss/material-kit-react/views/linksStyle.js";

const useStyles = makeStyles(styles);

export default function Links({ links }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <ListItem className={classes.listLink}>
          <div className={classes.imageContainer}>
            <img
              src={image}
              alt={"fabiano correa hipnose"}
              className={classes.imgRaised + " " + classes.imgFluid}
            />
          </div>
        </ListItem>
        <ListItem className={classes.listLink}>
          <h1 className={classes.title}>
            <strong>Fabiano Corrêa</strong>
          </h1>
          <h3>
            <i className={classes.title}>
              Psicanalista clínico e Hipnoterapeuta
            </i>
          </h3>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            fullWidth
            color="success"
            href="https://api.whatsapp.com/send?phone=5548999673317&text=Ol%C3%A1%20Fabiano%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20sua%20consulta%20de%20Hipnose"
          >
            <WhatsApp className={classes.icons} /> Meu WhatsApp
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            fullWidth
            color="facebook"
            href="https://www.facebook.com/fabiano.machadocorrea"
          >
            <Facebook className={classes.icons} />
            Meu Facebook
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            fullWidth
            color="instagram"
            href="https://www.instagram.com/oficialfabianocorrea"
          >
            <Instagram className={classes.icons} />
            Meu Instagram
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            fullWidth
            color="success"
            href="https://api.whatsapp.com/send?phone=5548999673317&text=Ol%C3%A1%20Fabiano%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20sua%20consulta%20de%20Hipnose"
          >
            <ScheduleIcon className={classes.icons} /> Agende Uma Consulta
            Comigo
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button fullWidth color="info" href="https://fabianocorrea.com/">
            <LanguageIcon className={classes.icons} /> Meu Site
          </Button>
        </ListItem>
      </List>
      <div style={{ margin: "auto", textAlign: "center", paddingBottom: "2%" }}>
        <a
          href="https://japps.vercel.app/"
          style={{ textDecoration: "none", color: "#777" }}
        >
          <h4>
            <i>Desenvolvido por </i>
            <strong>Japps</strong>
          </h4>
        </a>
      </div>
    </div>
  );
}
