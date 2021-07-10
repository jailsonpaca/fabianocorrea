import { container } from "../../../material-kit-react.js";
import imagesStyle from "../../../material-kit-react/imagesStyles.js";

const courseStyle = (theme) => ({
  section: {
    background: "#EEEEEE",
    padding: "70px 0",
    paddingLeft: "20px",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    boxShadow: `-webkit-box-shadow: 0px -33px 41px -25px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -33px 41px -25px rgba(0,0,0,0.75);
    box-shadow: 0px -33px 41px -25px rgba(0,0,0,0.75)`,
  },
  textCenter: {
    textAlign: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "10%",
      maxWidth: "50%",
    },
  },
  container: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      "& h2, & h4": {
        textAlign: "center",
      },
      "& button": {
        marginLeft: "15%",
      },
    },
  },
  quadro: {
    maxWidth: "50%",
  },
  fabiano: {
    maxWidth: "100%",
    width: "90%",
    marginRight: "35%",
    paddingLeft: "5%",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0%",
      marginLeft: "0",
    },
  },
  space70: {
    height: "70px",
    display: "block",
  },
  space20: {
    height: "20px",
    display: "block",
  },
  ...imagesStyle,
  link: {
    textDecoration: "none",
  },
});

export default courseStyle;
