//import styles from '../styles/Home.module.css'
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Header from "../components/Header/Header.js";
import HeaderLogo from "../assets/img/logo.png";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Story from "../components/Story";
import Footer from "../components/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/Button.js";
import Parallax from "../components/Parallax.js";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import fabianoCircle from "../assets/img/fabianoCircle.png";
import fabianoCircleDesk from "../assets/img/fabianoCircleDesk.png";
// sections for this page
import Services from "../components/Sections/Services.js";
import Courses from "../components//Sections/Courses.js";
import Online from "../components/Sections/Online.js";
import Depoiments from "../components/Sections/Depoiments.js";
import getData from "./api/getData";
import styles from "../assets/jss/material-kit-react/views/components.js";

const defaultplans = [
  {
    title: "Sessão Inicial / Sessão Avulsa",
    description:
      "Sessão Inicial ou Avulsa de 80 minutos por chamada de vídeo via WhatsApp.",
    price: "300",
    totalPrice: "300,00",
    obs: [
      "Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.",
      "Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.",
      "Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.",
    ],
    color: "#dadada",
  },
  {
    title: "Pacote de 02 Sessões",
    description:
      "Pacote de 02 sessões de 80 minutos que podem ser usadas de acordo com a necessidade.",
    price: "260",
    totalPrice: "520,00",
    obs: [
      "Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.",
      "Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.",
      "Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.",
    ],
    color: "rgba(224, 194, 0, 1)",
  },
  {
    title: "Pacote de 03 Sessões",
    description:
      "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.",
    price: "250",
    totalPrice: "750,00",
    obs: [
      "Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.",
      "Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.",
      "Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.",
    ],
    color: "rgba(7, 181, 244, 1)",
  },
  {
    title: "Pacote de 4 Sessões",
    description:
      "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.",
    price: "240",
    totalPrice: "960,00",
    obs: [
      "Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.",
      "Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.",
      "Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.",
    ],
    color: "#07DAA5",
  },
];
const useStyles = makeStyles(styles);

export default function Home(props) {
  const { plans = defaultplans, depoiments = [], landings = [] } = props;
  const classes = useStyles();
  const { ...rest } = props;
  const isSmall = useMediaQuery("(max-width:450px)");

  return (
    <>
      <div className={classes.backStage}>
        <Header
          brand={
            <img
              src={HeaderLogo}
              alt="Fabiano Correa hipnose e psicanalista"
              className={classes.headerLogo}
            />
          }
          rightLinks={<HeaderLinks landings={landings} />}
          fixed
          color="white"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax
          /*image={require("assets/img/storyImage.png")}*/ isImage={false}
          className={classes.parallax}
        >
          {isSmall ? (
            <img
              src={fabianoCircle}
              className={classes.fabianoCircle}
              alt="hipnoterapeuta fabiano correa"
            />
          ) : (
            <img
              src={fabianoCircleDesk}
              className={classes.fabianoCircle}
              alt="hipnoterapeuta fabiano correa"
            />
          )}
          <div className="waveEffect">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <Story />
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    Seja quem você gostaria de ter por perto
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <Services />
          {depoiments.length > 0 && <Depoiments depoiments={depoiments} />}
          <Online plans={plans} />
          <Courses />
          {/*
        <GridItem md={12} className={classes.textCenter}>
          <Link href={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              Minhas aquisições
            </Button>
          </Link>
        </GridItem>*/}
        </div>
        {isSmall && (
          <Button
            color="success"
            href="https://api.whatsapp.com/send?phone=5548999673317&text=Ol%C3%A1%20Fabiano%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20sua%20consulta%20de%20Hipnose"
            justIcon
            round
            className={classes.whatsAppBtn}
          >
            <WhatsAppIcon />
          </Button>
        )}
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      plans: JSON.parse(JSON.stringify(data.plans)),
      depoiments: JSON.parse(JSON.stringify(data.depoiments)),
      landings: JSON.parse(JSON.stringify(data.landings)),
      error: false,
    },
    revalidate: 100,
  };
};
