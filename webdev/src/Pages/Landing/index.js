import React from "react";
import "materialize-css";
import Header from "../../components/Navbar/navbar";
import Foot from "../../components/Footer/footer";
import "./style.css";
import Grid from "@material-ui/core/Grid";

function Landing() {
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
          // key={goodReads.id}
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
        >

          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Foot />
    </>
  );
}

export default Landing;
