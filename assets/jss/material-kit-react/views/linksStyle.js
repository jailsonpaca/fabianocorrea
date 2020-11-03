import { container, title } from "../../material-kit-react.js";
import { defaultFont } from "../../material-kit-react.js";
import imagesStyles from "../../material-kit-react/imagesStyles.js";

const linksStyle = theme => ({
    container,
    space50: {
        height: "50px",
        display: "block"
    },
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        textAlign: "center",
        "& h1": {
            fontSize: '280%'
        }
    },
    subTitle: {
        textAlign: "center",
    },
    btnAgendar: {
        display: "block",
        margin: "auto",
        fontSize: "100%",
        [theme.breakpoints.up("sm")]: {
            maxWidth: "30%",
        },
    },
    list: {
        ...defaultFont,
        fontSize: "14px",
        width: "40%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        margin: 'auto',
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "#444444"
    },
    listItem: {
        color: "#444444",
        position: "relative",
        textAlign: "center",
        display: "block",
        width: "100%",
        margin: "auto",
        "& span": {
            textTransform: "none",
        },
        "& a": {
            fontSize: "100%",
            fontWeight: 500,
            color: "white"
        },
        [theme.breakpoints.down("sm")]: {
            "&:after": {
                width: "calc(100% - 30px)",
                content: '""',
                display: "block",
                height: "1px",
                marginLeft: "15px",
                backgroundColor: "#e5e5e5"
            }
        }
    },
    imageContainer: {
        overflow: "hidden",
        borderRadius: "50%",
        width: 250,
        height: 250,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: 200,
            height: 200,
        },
    },
    icons: {
        marginBottom: 2,
    },
    ...imagesStyles
});

export default linksStyle;
