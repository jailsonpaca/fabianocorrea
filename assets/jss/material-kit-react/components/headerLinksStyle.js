import { defaultFont } from "../../material-kit-react.js";

import tooltip from "../../material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "#444444",
  },
  listItem: {
    float: "left",
    color: "#444444",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
      "&:last-of-type div": {
        width: "100%",
        maxWidth: 180,
      },
      "&:last-of-type div div:nth-child(2)": {
        transform: "translate3d(20px, -23px, 0px) !important",
      },
    },

    [theme.breakpoints.up("sm")]: {
      "&:last-of-type div div:nth-child(2)": {
        transform: "translate3d(-50px, 54px, 0px) !important",
      },
      "&:last-of-type div": {
        width: "100%",
        maxWidth: 160,
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  navLink: {
    color: "#fff",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#fff",
      background: "rgba(200, 200, 200, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    [theme.breakpoints.between("800", "1100")]: {
      padding: "5px",
    },
  },
  notificationNavLink: {
    color: "#444444",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  dropdownLink: {
    "&,&:focus": {
      color: "#444444",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
    },
    "&:hover": {
      color: "#fff",
    },
  },
  icons: {
    width: "40px !important",
    height: "40px !important",
    marginRight: "3px",
    fontSize: "40px",
    color: "#fff",
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
});

export default headerLinksStyle;
