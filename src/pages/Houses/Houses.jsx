import { Grid } from "@mui/material";
import React from "react";
//  components
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import Rightbar from "../../components/Rightbar/Rightbar";
import { Wrapper } from "./Houses-style";

const Houses = () => {
  return (
    <Wrapper>
      <Navbar />
      <Grid container>
        <Grid item sm={1} xs={1}></Grid>
        <Grid item sm={8} xs={8}>
          <Post />
        </Grid>
        <Grid item sm={3} xs={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <Wrapper></Wrapper>
    </Wrapper>
  );
};

export default Houses;
