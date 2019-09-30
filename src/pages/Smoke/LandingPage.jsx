import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
import {FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

import {Link} from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

// @material-ui/icons
import { Apps, CloudDownload, ShoppingCart } from "@material-ui/icons";

// React icons
import { FaPlay } from 'react-icons/fa';

// core components
import Header from "components/HeaderSmoke/Header.jsx";
import Footer from "components/Footer/FooterSmoke.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/HeaderSmoke/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import PriceSection from "./Sections/PriceSection.jsx";
import Price2Section from "./Sections/Price2Section.jsx";
import HowSection from "./Sections/HowSection.jsx";
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import TestimonialsSection from "./Sections/TestimonialsSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Smart Crypto Advisor"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
      <Parallax filter image={require("assets/img/crypto-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={7}>
                <h1 className={classes.title}>Beating the Crypto Market is now easier</h1>
                  <h4 style={{'font-weight': 'bold'}}>
                    Smart Crypto Advisor is a tool that makes accurate predictions of the Crypto Market based on large amounts of historical data.
                  </h4>
                  <br />
                    <Button
                      onClick={() => scrollTo('#subscribe')}
                      color="info"
                      size="md"
                      target="_blank"
                      rel="noopener noreferrer"
                      round
                    >
                    <ShoppingCart className={classes.icons} />
                      Buy Now
                    </Button>

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <HowSection />
            <ProductSection />
            <TestimonialsSection />
            <Price2Section />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
