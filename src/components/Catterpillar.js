import React, { useEffect } from 'react'
import { Container, Paper, Grid, makeStyles, Typography, Button } from '@material-ui/core'
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    props: {
        backgroundColor: theme.palette.background.paper,
        ...theme.typography.button,
        padding: theme.spacing(4),
        textAlign: 'center',
    },
}));

export const Catterpillar = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <>
        <Header/>
        <div className={classes.props}><Typography variant="h4" component="h2">{"Catterpillar Shoes"}</Typography></div>
        <div style={{ padding: 20 }}>
            <React.Fragment>
                <Container fixed>
                    <div className={classes.root}>
                        <Grid container spacing={1}>
                          <Grid container item xs={12} spacing={3}>
                            <React.Fragment>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat1.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    Rack Room Shoes
                                  </Typography>
                                  <Typography>Catterpillar</Typography>
                                  <Typography>$250.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat2.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    Work Boot
                                  </Typography>
                                  <Typography>Catterpillar</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat3.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    Air Zoom Terra Kiger 6
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                            </React.Fragment>
                          </Grid>
                          <Grid container item xs={12} spacing={3}>
                            <React.Fragment>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat4.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    ZoomX Vaporfly Next%
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$250.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat5.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    Air Zoom Terra Kiger 6
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat1.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    Air Zoom Terra Kiger 6
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                            </React.Fragment>
                          </Grid>
                          <Grid container item xs={12} spacing={3}>
                            <React.Fragment>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat5.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    ZoomX Vaporfly Next%
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$250.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat4.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    Air Zoom Terra Kiger 6
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/cat/cat3.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                    Air Zoom Terra Kiger 6
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button variant="contained" color="primary">
                                    Shop Now
                                  </Button>
                                </Paper>
                              </Grid>
                            </React.Fragment>
                          </Grid>
                          <Grid container item xs={12} spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <div style={{textAlign:'center',padding:'30px'}}>
                                        <Button variant="contained" color="primary" onClick={()=>{navigate('/')}}>
                                            <ArrowBackIcon/> Back to home
                                        </Button>
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </React.Fragment>
        </div>
        </>
    )
}
