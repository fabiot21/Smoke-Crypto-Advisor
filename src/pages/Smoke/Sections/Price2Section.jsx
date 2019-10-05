import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import {Link} from 'gatsby';
import { Apps, CloudDownload, ShoppingCart } from "@material-ui/icons";

import Button from "components/CustomButtons/Button.jsx";


import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Android from "@material-ui/icons/Android";
import GpsFixed from "@material-ui/icons/GpsFixed";
import Cloud from "@material-ui/icons/Cloud";
import Done from "@material-ui/icons/Done";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class Price2Section extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id='subscribe' className={classes.section}>
        <hr />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <h2 className={classes.title}>Just $4.99 / month!</h2>
            <h3 style={{'font-weight' : 'bold'}} className={classes.description}></h3>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Full Access"
              description=""
              icon={Done}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Unlimited Queries"
              description=""
              icon={Done}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Daily System Report"
              description=""
              icon={Done}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
        <br />
        <Link to="/signup">
          <Button
            onClick={() => {
              window.gtag('event', 'click', {
                'event_category': 'price',
                'event_label': 'signup'
              });
            }}
            style={{'borde-color':'coral'}}
            color="info"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            round
          >
          <ShoppingCart className={classes.icons} />
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(productStyle)(Price2Section);
