import { container, title } from "../../../material-kit-react.js";
import customCheckboxRadioSwitch from "../../../material-kit-react/customCheckboxRadioSwitch.js";

const basicsStyle = (theme) => ({
  sections: {
    padding: "70px 0",
    "&:first-of-type": {
      padding: "30px 0",
    },
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    color: "#fff",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    gridGap: "5%",
  },
  card: {
    background: "rgb(7, 218, 165)",
    "&:hover": {
      boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)",
    },
    padding: "1em",
    borderRadius: "10px",
    width: "100%",
    display: "inline-block",
    clipPath: "circle(100% at 50% 20%)",
    [theme.breakpoints.down("sm")]: {
      clipPath: "circle(110% at 50% 20%)",
    },
    transition: "all .5s ease-in-out",
    cursor: "pointer",
    color: "#fff",
    "& span": {
      float: "right",
      fontWeight: "bold",
      transition: "color .5s",
      position: "relative",
      marginRight: "4%",
    },
    "& h1": {
      margin: 0,
      fontSize: "40px",
      textAlign: "center",
    },
    "& p": {
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "40px",
    },
  },
  treatmentsContainer: {
    display: "flex",
    marginLeft: "5%",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
    [theme.breakpoints.between("600", "800")]: {
      display: "flex",
    },
  },
  treatment: {
    width: "30%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.between("600", "800")]: {
      width: "50%",
    },
  },
  treatmentText: {
    color: "#fff",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
  ...customCheckboxRadioSwitch,
});

export default basicsStyle;
