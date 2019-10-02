import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Send from "@material-ui/icons/Send";
import DeviceHub from "@material-ui/icons/DeviceHub";
import Flare from "@material-ui/icons/Flare";
import Equalizer from "@material-ui/icons/Equalizer";
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
            <h2 className={classes.title}>Features</h2>
            <h5 className={classes.description}>
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Cryptocurrency Prediction"
                description="Select any of the top 20 cryptocurrencies and the system will output the predicted action as a category, buy or sell, along with the expected price."
                icon={Flare}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Strategy Recommender"
                description="On a daily basis, the intelligent agent recommends short and long term strategies that have a high probability of success."
                icon={DeviceHub}
                iconColor="rose"
                vertical
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Multiple Insights"
                description="Compare different cryptocurrencies risks, trends and opportunities."
                icon={Equalizer}
                iconColor="warning"
                vertical
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Opportunity Notifications"
                description="The app notifies of low-risk market opportunities detected by the algorithm."
                icon={Send}
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
