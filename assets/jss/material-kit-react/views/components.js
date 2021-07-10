import { container } from "../../material-kit-react.js";

const componentsStyle = (theme) => ({
  backStage: {
    background:
      "radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)",
  },
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  parallax: {
    height: "670px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "50%",
    paddingBottom: "15%",
    background: "#015871",
    backgroundColor:
      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 10%, #015871 12%)",
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 8%, #015871 10%)",
    },
    //background:"radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)"
  },
  fabianoCircle: {
    position: "absolute",
    top: "20%",
    width: "40%",
  },
  headerLogo: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "absolute",
    top: "72%",
    [theme.breakpoints.down("sm")]: {
      top: "15%",
      fontSize: "2.5rem",
      textAlign: "center",
    },
    textShadow: "4px 3px 5px rgba(0,0,0,0.8)",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    backgroundImage:
      "linear-gradient(to left top, #1b1213, #2a2426, #3b373a, #4c4b4d, #606060)",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0px 30px 0px",
    marginTop: "-20px",
    borderRadius: "6px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 20px",
      marginTop: "-20px",
    },
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  whatsAppBtn: {
    position: "fixed",
    bottom: "10px",
    right: "15px",
    zIndex: 100,
    "& svg ": {
      width: "30px",
      height: "30px",
    },
    padding: "30px",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0,0.5), 0 3px 1px -2px rgba(0, 0, 0,0.5), 0 1px 5px 0 rgba(0, 0, 0,0.5)",
  },
});

export default componentsStyle;
