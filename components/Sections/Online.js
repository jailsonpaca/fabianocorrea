import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Button from "../Button.js";
import TouchApp from "@material-ui/icons/TouchApp";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import mapa from "../../assets/img/mapa.png";
import { useTheme } from '@material-ui/core/styles';
import styles from "../../assets/jss/material-kit-react/views/componentsSections/onlineStyle.js";

const numPlans = ['UMA', 'DUAS', 'TRÊS', 'QUATRO'];
const useStyles = makeStyles(styles);
/*const plans = [{
  title: "Sessão Inicial / Sessão Avulsa", description: "Sessão Inicial ou Avulsa de 80 minutos por chamada de vídeo via WhatsApp.", price: "300", totalPrice: "300,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "#dadada"
},
{
  title: "Pacote de 02 Sessões", description: "Pacote de 02 sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "260", totalPrice: "520,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "rgba(224, 194, 0, 1)"
},
{
  title: "Pacote de 03 Sessões", description: "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "250", totalPrice: "750,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "rgba(7, 181, 244, 1)"
},
{
  title: "Pacote de 4 Sessões", description: "Pacote de 04 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "240", totalPrice: "960,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "#07DAA5"
}];*/


export default function Online({ plans }) {
  //const plans=plans;
  console.log(plans);
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:450px)');
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('600', '800'));
  return (
    <div className={classes.section} id="onlineID">
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h1>Consulta Presencial e <strong>Online</strong></h1>
          </div>
          <div className={classes.space70} />
          <GridContainer justify="center" style={{ margin: "auto" }}>
            <GridItem xs={12} sm={6} md={6}>
              <h4 className={classes.textCenter}>
                Meu consultório físico fica localizado na Rua Hortência Dutra 397, Centro - Balneário Arroio do Silva.
  clique no mapa {isSmall ? ('abaixo') : ('ao lado')}  para ver a localização exata e venha fazer uma visita.
             Se você preferir(em situações como a pandemia do COVID-19, por exemplo),
             possuo a metodologia de consulta online, voce pode resolver seus problemas e dificuldades
             direto da sua casa!
          </h4>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <a href="https://goo.gl/maps/4aZ5c7fsXmRUsi6f9"><img src={mapa} className={classes.mapa} alt="consultório do fabiano correa" /></a>
            </GridItem>
          </GridContainer>
          <div className={classes.space70} />
          <GridContainer className={classes.planContainer}>
            {plans.map((e, i) => (
              <GridItem key={i} xs={12} sm={isTablet ? (6) : (3)} className={classes.plan} style={{ backgroundColor: `${e.color}` }}>
                <div className={classes.card} >
                  <h2>{e.title}</h2>
                  <p>{e.description}</p>
                  <Divider />
                  {e.price !== 'oculto' ? (
                    <>
                      <h4>Valor por sessão</h4><h1><strong>R${e.price}</strong></h1>
                      <Divider />
                      <h4><strong>{parseFloat(e.price) !== parseFloat(e.totalPrice) ? ("Total por pacote:") : ("Total por sessão:")} R${e.totalPrice}</strong></h4>
                      <Button color="success" className={classes.btnQuero} size="lg" href={`https://api.whatsapp.com/send?phone=554899673317&text=Ol%C3%A1%20fabiano,%20quero%20fazer%20o%20Pacote%20de%20${numPlans[i]}%20consulta%20de%20Hipnose`} >
                        Quero este pacote! <TouchApp className={classes.icons} />
                      </Button>
                    </>
                  ) : (
                      <>
                        <Button className={classes.btnQuero} size="lg" href={`https://api.whatsapp.com/send?phone=554899673317&text=Ol%C3%A1%20fabiano,%20quero%20fazer%20o%20Pacote%20de%20${numPlans[i]}%20consulta%20de%20Hipnose`}>
                          Quero este pacote! <TouchApp className={classes.icons} />
                        </Button>
                        <Divider />
                      </>
                    )}
                  <List className={classes.obsContainer}>
                    {e.obs.map((item, i) => (
                      <ListItem key={i} className={classes.obs}>
                        <ListItemIcon>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </GridItem>))}
          </GridContainer>
          <div className={classes.space70} />
        </div>
      </div>
    </div>
  );
}
