import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Send from "@material-ui/icons/Send";
import DeviceHub from "@material-ui/icons/DeviceHub";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Equalizer from "@material-ui/icons/Equalizer";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class TestimonialsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Testimonials</h2>
            <h5 className={classes.description}>
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <br />
          <br />
          <br />
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <p className={classes.description}>
              "I have been a Smart Crypto Advisor user for about 4 months now and I have created really effective strategies that not only beat the market, but that do so on a much better risk-adjusted basis."</p>
            <p className={classes.description}>– Eric T.</p>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <p className={classes.description}>
              "The monthly subscription amount was covered on the first trading day, very good service – Thank you!"</p>
            <p className={classes.description}>– Sebastian M.</p>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <p className={classes.description}>
                "Excellent tool to identify daily market opportunities" </p>
            <p className={classes.description}>– Nathan B.</p>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <p className={classes.description}>
              "Fantastic service, there are many things that distinguish the Smart Crypto Advisor algorithm. I highlight the ability to find and visualize market opportunities based on its powerful Artificial Intelligence algorithm."</p>
            <p className={classes.description}>– Jonathan H.</p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(TestimonialsSection);
