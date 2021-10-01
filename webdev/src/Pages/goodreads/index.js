import React from "react";
import "materialize-css";
import Header from "../../components/Navbar/navbar";
import revealCard from "../../components/revealCard";
import Grid from "@material-ui/core/Grid";
import bookCards from "../../bookCards.json"

function books(){
  state = {
    bookCards,
  };
    return(
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
            key={bookCards.id}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
          >
             <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
          </Grid>
          </Grid>
          </>
    )};

export default books;