import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "materialize-css";
import Header from "../../components/Navbar/navbar";
import Foot from "../../components/Footer/footer";
import ResourceCard from "../../components/ResourceCard";
import resourceLinks from "../../resourceLinks.json"

export class Home extends Component {
  state = {
    resourceLinks,
  };

  render() {
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
          {this.state.resourceLinks.map((resourceLink) => (
            <Grid
              key={resourceLinks.id}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              <ResourceCard
                id={resourceLink.id}
                key={resourceLink.id}
                name={resourceLink.content}
                image={resourceLink.image}
                content={resourceLink.name}
                link={resourceLink.link}
              />{" "}
            </Grid>
          ))}{" "}
        </Grid>{" "}
        <Foot />
      </>
    );
  }
}

export default Home;
