import { container } from "../../../material-kit-react.js";
import imagesStyle from "../../../material-kit-react/imagesStyles.js";

const courseStyle = theme=>({
  section: {
    background: "#EEEEEE",
    padding: "70px 0",
    paddingLeft: '20px',
  },
  textCenter:{
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
    marginRight: "20px",
    }
  },
  container:{
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      "& h2, & h4":{
        textAlign: "center"
      },
      "& button":{
        marginLeft: "15%"
      }
    }
  },
  quadro:{
  maxWidth: "50%",
  },
  fabiano:{
    maxWidth: "100%",
    width:"90%",
    marginLeft:"5%",
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
      marginLeft: "0",
      }
  },
  space70: {
    height: "70px",
    display: "block"
  },  
  space20: {
    height: "20px",
    display: "block"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
});

export default courseStyle;
