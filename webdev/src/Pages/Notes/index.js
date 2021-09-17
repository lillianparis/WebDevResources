import React from "react";
import "materialize-css";
import Header from "../../components/Navbar/navbar";
import Foot from "../../components/Footer/footer";
import Grid from "@material-ui/core/Grid";
import NoteCard from "../../components/NoteCard";
import NoteForm from "../../components/NoteForm";


function Notes() {
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
          <Grid> 
         <NoteForm/>
          <NoteCard/>
 
          </Grid>




        </Grid>
      {/* <div className="container">
        <div className="row">
          <div className="col">

          </div>
          <div className="col">

          </div>
        </div>
      </div> */}
      <Foot />
    </>
  );
}

export default Notes;
