import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => (dispatch(getPosts()), [dispatch]));

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
