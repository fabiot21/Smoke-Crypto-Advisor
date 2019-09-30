import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Android from "@material-ui/icons/Android";
import GpsFixed from "@material-ui/icons/GpsFixed";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>How does it works?</h2>
            <h5 className={classes.description}>
              Our algorithm amasses large amounts of historical price data,
              searching for patterns, tipping points, and other pointers.
              With that information, it builds a forecast based on probability
              using such data as a point of reference. It then displays all that
              information in an easy to understand chart, so that you can assess
              the situation at a glance.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Big Data"
                description="We collect and analyze every day more than 100 million of data points from different sources. This includes historical prices, news and mass psychology."
                icon={Cloud}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Machine Learning"
                description="Our system is based on Artificial Intelligence and Machine Learning with elements of Artificial Neural Networks and Reinforcement Learning Algorithms incorporated in it."
                icon={Android}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Accurate Predictions"
                description="The models constantly generate and explore new strategies based on new data and correlations to continuously improve overall accuracy."
                icon={GpsFixed}
                iconColor="success"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
