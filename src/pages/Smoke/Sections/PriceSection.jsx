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
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class PriceSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id='subscribe' className={classes.section}>
        <hr />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <h2 className={classes.title}>Subscribe!</h2>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={3}>
            <Card raised={true} style={{'color':'white', 'background-color': '#01ACC1'}}>
                <CardBody>
                  <h4>Full Subscription</h4>
                  <hr />
                  <h4 style={{'font-weight': 'bold'}}>Just for $9.99 / month</h4>
                </CardBody>
                <p style={{'font-size': '17px'}}>Complete access to A.I Crypto Investor and unlimited queries to the database</p>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={7}>
                    <Link to='/login-page'>
                      <Button
                        style={{'borde-color':'coral'}}
                        color="primary"
                        size="md"
                        target="_blank"
                        rel="noopener noreferrer"
                        round
                      >
                      <ShoppingCart className={classes.icons} />
                        Sign Up
                      </Button>
                    </Link>
                  </GridItem>
                </GridContainer>
                <br />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(PriceSection);
