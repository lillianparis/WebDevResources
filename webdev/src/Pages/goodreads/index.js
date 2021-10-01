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
       <TeamCard
                id={teamProfile.id}
                key={teamProfile.id}
                name={teamProfile.content}
                image={teamProfile.image}
                content={teamProfile.name}
                link={teamProfile.link}
              />{" "}
          </Grid>
          {" "}
          </Grid>}{" "}
          </>
    )};

export default books;