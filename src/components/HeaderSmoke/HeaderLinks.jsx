/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, ShoppingCart, CloudQueue } from "@material-ui/icons";

import scrollTo from 'gatsby-plugin-smoothscroll';

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes, show } = props;
  return (
    <List className={classes.list}>

      {show==false? null : (
        <div>
        <ListItem className={classes.listItem}>
            <Button
              href="/signup"
              color="transparent"
              target="_blank"
              className={classes.navLink}
              simple>
                <CloudQueue className={classes.icons} />
                Sign in
            </Button>
        </ListItem>

        <ListItem className={classes.listItem}>

            <Button
              color="info"
              style={{'font-size': '12px'}}
              onClick={() => {
                scrollTo('#subscribe')
                window.gtag('event', 'click', {
                  'event_category': 'header',
                  'event_label': 'buynow'
                });
              }}
              round>

              <ShoppingCart className={classes.icons} />
                Buy Now
            </Button>

        </ListItem>
      </div>
      )}


    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
