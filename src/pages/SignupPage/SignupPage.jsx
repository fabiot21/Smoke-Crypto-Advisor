import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
import {FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
// core components
import Header from "components/HeaderSmoke/Header.jsx";
import HeaderLinks from "components/HeaderSmoke/HeaderLinks.jsx";
import Footer from "components/Footer/FooterSmoke.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/crypto-bg.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email : ''
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  onSubmitEmail(email) {
    
    console.log(email)

    window.gtag('event', 'click', {
      'event_category': 'signup',
      'event_label': 'submit',
      'value': email
    });

    this.setState({ 'email': '' })
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Smart Crypto Advisor"
          rightLinks={<HeaderLinks show={false}/>}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <p className={classes.divider}>Please enter your email</p>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: e => this.setState({ email: e.target.value }),
                          value: this.state.email,
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={() => this.onSubmitEmail(this.state.email)} simple color="success" size="lg">
                        Submit
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
