import React, { Component } from "react";
import "materialize-css";
import Header from "../../components/Navbar/navbar";
import Foot from "../../components/Footer/footer";
import TeamCard from "../../components/TeamCard";
import Grid from "@material-ui/core/Grid";
import teamProfiles from "../../TeamProfile.json";

export class About extends Component {
  state = {
    teamProfiles,
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
          {this.state.teamProfiles.map((teamProfile) => (
            <Grid
              key={teamProfiles.id}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              <TeamCard
                id={teamProfile.id}
                key={teamProfile.id}
                name={teamProfile.content}
                image={teamProfile.image}
                content={teamProfile.name}
                link={teamProfile.link}
              />{" "}
            </Grid>
          ))}{" "}
        </Grid>{" "}
        <Foot />
      </>
    );
  }
}
export default About;
