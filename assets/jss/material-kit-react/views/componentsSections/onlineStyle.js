import { container, title } from "../../../material-kit-react.js";
//import { useMediaQuery } from '@material-ui/core';

//const isTablet = useMediaQuery('(min-width:800px and max-width:1100px )');

const onlineStyle = theme=>({
  section: {
    padding: "70px 0",
    
  },
  space70: {
    height: "70px",
    display: "block"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign:"center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft:"20px",
      paddingRight:"20px"
    }
  },
  textCenter:{
    textAlign:"center",
  },
  container:{
    marginLeft: "1.5%"
  },
  obsContainer:{
    display:"flex",
    margin:"auto",
    flexWrap:"wrap",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
   },
   obs:{
      margin:"auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
   },
   mapa:{
    maxWidth: "100%",
    transition: "transform .3s ease-in-out",
    boxShadow: "0 0 15px 2px #999",
    "&:hover":{
      boxShadow: "0 0 15px 5px #999",
      transform: "scale(1.02)"
  }
},
btnQuero:{
  display: "block",
  fontSize: "100%",
  backgroundColor: "#00d263 !important",
  border: "1px #0000005e solid",
  [theme.breakpoints.down("sm")]: {
    marginLeft:"0%",
  },
  [theme.breakpoints.between("800","1100")]:{
  padding: "10px 5px",
  fontSize:"90%"
  }
},
  icons:{
    width: "30px !important",
    height: "30px !important",
  },
    
  
   planContainer:{
    maxWidth: "94%",
    flexWrap: 'nowrap',
    [theme.breakpoints.down("sm")]: {
      marginLeft:"1%",
      flexWrap: 'wrap'
    },
    [theme.breakpoints.between('600','800')]:{
    maxWidth: '100%',
    flexWrap: 'wrap'
    }
   },
   plan:{
     borderRadius:"10px",
     margin:"10px",
     [theme.breakpoints.between("800","1100")]:{
        margin:"9px"
     },
     [theme.breakpoints.between('600','800')]:{
      maxWidth: '45%'
   },
     

     "&:hover":{
      boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)",
      },
      width: "100%",
      transition: "all .5s ease-in-out",
      cursor: "pointer",
      "& h2":{
        fontSize: "2rem",
        textAlign:"center",
      },
      "& h4":{
        textAlign:"center",
        marginBottom: 0,
      },
      "& h1":{
        marginTop:0,
        textAlign:"center",
      },
      "& p": {
        marginTop:"10px",
        textAlign:"center",
        fontSize: "20px",
        lineHeight: "30px",
        "& strong":{
          fontSize: "30px",
          padding: "5px",
        }
      }
   }
    
});

export default onlineStyle;
