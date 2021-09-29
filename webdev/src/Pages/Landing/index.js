import React, { Component } from "react";
import "materialize-css";
import Header from "../../components/Navbar/navbar";
import Foot from "../../components/Footer/footer";
import defaultCard from "../../components/defaultCard/defaultCard";
import "./style.css";
import Grid from "@material-ui/core/Grid";

export class Landing extends Component {

  render (){
  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
        style={{ paddingLeft: "25px", padding: "35px" }}
      >

        <Grid
    
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
        >
<defaultCard   />
     
      
        </Grid>
      </Grid>
    
      <Foot />
    </>
  );
};
}

export default Landing;
