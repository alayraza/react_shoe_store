import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Container, Typography, Grid, Paper, makeStyles, Box, AppBar, Tabs, Tab, useTheme, Button } from '@material-ui/core'
import Header  from './Header';
import { Slider } from './Slider';
import { useNavigate } from 'react-router-dom';
import {Addtocart} from '../actions/Addtocart';
import {connect} from 'react-redux';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));
const Products = (propsVal) => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    const navigate = useNavigate();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
      setValue(index);
    };
    return (
        <>
          <Header/>
          <Slider/>
        <div style={{ padding: 20 }}>
          <React.Fragment>
            <Container fixed>
              <div className={classes.root}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Nike" {...a11yProps(0)} />
                    <Tab label="Catterpillar" {...a11yProps(1)} />
                    <Tab label="Adidas" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className={classes.root}>
                      <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                          <React.Fragment>
                          <Grid item xs={4}>
                              <Paper className={classes.paper}>
                              <img alt="nike product1" src={require("../images/nike/nike1.jpg")}/>
                              <Typography variant="h5" component="h4">
                                  ZoomX Vaporfly Next%
                              </Typography>
                              <Typography>Nike</Typography>
                              <Typography>$250.00</Typography>
                              <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'1','productManufacturer':'Nike','productName':'ZoomX Vaporfly Next%','price':'$250','img':require("../images/nike/nike1.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                  Shop Now
                              </Button>
                              </Paper>
                              {/* ()=>Addtocart({'cart':{'productId':'1','productManufacturer':'Nike','productName':'ZoomX Vaporfly Next%','price':'250'}}) */}
                          </Grid>
                          <Grid item xs={4}>
                              <Paper className={classes.paper}>
                              <img alt="nike product1" src={require("../images/nike/nike2.jpg")}/>
                              <Typography variant="h5" component="h4">
                                  Air Zoom Terra Kiger 6
                              </Typography>
                              <Typography>Nike</Typography>
                              <Typography>$130.00</Typography>
                              <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'2','productManufacturer':'Nike','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/nike/nike2.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                  Shop Now
                              </Button>
                              </Paper>
                          </Grid>
                          <Grid item xs={4}>
                              <Paper className={classes.paper}>
                              <img alt="nike product1" src={require("../images/nike/nike3.jpg")}/>
                              <Typography variant="h5" component="h4">
                                  Air Zoom Terra Kiger 6
                              </Typography>
                              <Typography>Nike</Typography>
                              <Typography>$130.00</Typography>
                              <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'3','productManufacturer':'Nike','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/nike/nike3.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                <img alt="nike product1" src={require("../images/nike/nike4.jpg")}/>
                                <Typography variant="h5" component="h4">
                                    ZoomX Vaporfly Next%
                                </Typography>
                                <Typography>Nike</Typography>
                                <Typography>$250.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'4','productManufacturer':'Nike','productName':'ZoomX Vaporfly Next%','price':'$250','img':require("../images/nike/nike4.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                    Shop Now
                                </Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                <img alt="nike product1" src={require("../images/nike/nike5.jpg")}/>
                                <Typography variant="h5" component="h4">
                                    Air Zoom Terra Kiger 6
                                </Typography>
                                <Typography>Nike</Typography>
                                <Typography>$130.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'5','productManufacturer':'Nike','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/nike/nike5.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                    Shop Now
                                </Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                <img alt="nike product1" src={require("../images/nike/nike3.jpg")}/>
                                <Typography variant="h5" component="h4">
                                    Air Zoom Terra Kiger 6
                                </Typography>
                                <Typography>Nike</Typography>
                                <Typography>$130.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'6','productManufacturer':'Nike','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/nike/nike3.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <img alt="nike product1" src={require("../images/nike/nike5.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                      ZoomX Vaporfly Next%
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$250.00</Typography>
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'7','productManufacturer':'Nike','productName':'ZoomX Vaporfly Next%','price':'$250','img':require("../images/nike/nike5.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                      Shop Now
                                  </Button>
                                  </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                  <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/nike/nike2.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                      Air Zoom Terra Kiger 6
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'8','productManufacturer':'Nike','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/nike/nike2.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                      Shop Now
                                  </Button>
                                  </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                  <Paper className={classes.paper}>
                                  <img alt="nike product1" src={require("../images/nike/nike3.jpg")}/>
                                  <Typography variant="h5" component="h4">
                                      Air Zoom Terra Kiger 6
                                  </Typography>
                                  <Typography>Nike</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'9','productManufacturer':'Nike','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/nike/nike3.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button variant="contained" color="primary" onClick={()=>{navigate('/Nike')}}>
                                    Browse more
                                  </Button>
                                </div>
                              </Grid>
                            </React.Fragment>
                          </Grid>
                      </Grid>
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
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
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'1','productManufacturer':'Catterpillar','productName':'Rack Room Shoes','price':'$250','img':require("../images/cat/cat1.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'2','productManufacturer':'Catterpillar','productName':'Work Boot','price':'$130','img':require("../images/cat/cat2.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Typography>Catterpillar</Typography>
                                  <Typography>$130.00</Typography>
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'3','productManufacturer':'Catterpillar','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/cat/cat3.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Typography>Catterpillar</Typography>
                                  <Typography>$250.00</Typography>
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'4','productManufacturer':'Catterpillar','productName':'ZoomX Vaporfly Next%','price':'$250','img':require("../images/cat/cat4.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'5','productManufacturer':'Catterpillar','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/cat/cat5.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'6','productManufacturer':'Catterpillar','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/cat/cat1.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'7','productManufacturer':'Catterpillar','productName':'ZoomX Vaporfly Next%','price':'$250','img':require("../images/cat/cat5.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'8','productManufacturer':'Catterpillar','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/cat/cat4.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'9','productManufacturer':'Catterpillar','productName':'Air Zoom Terra Kiger 6','price':'$130','img':require("../images/cat/cat3.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button variant="contained" color="primary" onClick={()=>{navigate('/Catterpillar')}}>
                                    Browse more
                                  </Button>
                                </div>
                              </Grid>
                            </React.Fragment>
                        </Grid>
                      </Grid>
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className={classes.root}>
                      <Grid container spacing={1}>
                      <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <img alt="adi product1" src={require("../images/adi/adi1.jpg")}/>
                                <Typography variant="h5" component="h4">
                                Black Stripe
                                </Typography>
                                <Typography>Adidas</Typography>
                                <Typography>$250.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'1','productManufacturer':'Adidas','productName':'Black Stripe','price':'$250','img':require("../images/adi/adi1.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                Shop Now
                                </Button>
                            </Paper>
                            </Grid>
                            <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <img alt="adi product1" src={require("../images/adi/adi2.jpg")}/>
                                <Typography variant="h5" component="h4">
                                4D Run
                                </Typography>
                                <Typography>Adidas</Typography>
                                <Typography>$130.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'2','productManufacturer':'Adidas','productName':'4D Run','price':'$130','img':require("../images/adi/adi2.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                Shop Now
                                </Button>
                            </Paper>
                            </Grid>
                            <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <img alt="adi product1" src={require("../images/adi/adi5.jpg")}/>
                                <Typography variant="h5" component="h4">
                                Cloudform
                                </Typography>
                                <Typography>Adidas</Typography>
                                <Typography>$130.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'3','productManufacturer':'Adidas','productName':'Cloudform','price':'$130','img':require("../images/adi/adi3.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                <img alt="nike product1" src={require("../images/adi/adi4.jpg")}/>
                                <Typography variant="h5" component="h4">
                                UltraBoost
                                </Typography>
                                <Typography>Adidas</Typography>
                                <Typography>$250.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'4','productManufacturer':'Adidas','productName':'UltraBoost','price':'$250','img':require("../images/adi/adi4.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                Shop Now
                                </Button>
                            </Paper>
                            </Grid>
                            <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <img alt="nike product1" src={require("../images/adi/adi5.jpg")}/>
                                <Typography variant="h5" component="h4">
                                Zoom
                                </Typography>
                                <Typography>Adidas</Typography>
                                <Typography>$130.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'5','productManufacturer':'Adidas','productName':'Zoom','price':'$130','img':require("../images/adi/adi5.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                Shop Now
                                </Button>
                            </Paper>
                            </Grid>
                            <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <img alt="nike product1" src={require("../images/adi/adi1.jpg")}/>
                                <Typography variant="h5" component="h4">
                                Zoom Terra 
                                </Typography>
                                <Typography>Adidas</Typography>
                                <Typography>$130.00</Typography>
                                <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'6','productManufacturer':'Adidas','productName':'Zoom Terra','price':'$130','img':require("../images/adi/adi1.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                    <img alt="nike product1" src={require("../images/adi/adi5.jpg")}/>
                                    <Typography variant="h5" component="h4">
                                        Vaporfly 
                                    </Typography>
                                    <Typography>Adidas</Typography>
                                    <Typography>$250.00</Typography>
                                    <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'7','productManufacturer':'Adidas','productName':'Vaporfly','price':'$250','img':require("../images/adi/adi5.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                        Shop Now
                                    </Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                    <img alt="adidas product1" src={require("../images/adi/adi4.jpg")}/>
                                    <Typography variant="h5" component="h4">
                                        Kiger 6
                                    </Typography>
                                    <Typography>Adidas</Typography>
                                    <Typography>$130.00</Typography>
                                    <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'8','productManufacturer':'Adidas','productName':'Kiger 6','price':'$130','img':require("../images/adi/adi4.jpg"),'quantity':1}})}} variant="contained" color="primary">
                                        Shop Now
                                    </Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                    <img alt="nike product1" src={require("../images/adi/adi3.jpg")}/>
                                    <Typography variant="h5" component="h4">
                                        Air Zoom
                                    </Typography>
                                    <Typography>Adidas</Typography>
                                    <Typography>$130.00</Typography>
                                    <Button onClick={()=>{propsVal.dispatchtoAction({'cart':{'productId':'9','productManufacturer':'Adidas','productName':'Air Zoom','price':'$130','img':require("../images/adi/adi3.jpg"),'quantity':1}})}} variant="contained" color="primary">
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
                                  <Button variant="contained" color="primary" onClick={()=>{navigate('/Adidas')}}>
                                    Browse more
                                  </Button>
                                </div>
                              </Grid>
                            </React.Fragment>
                        </Grid>
                      </Grid>
                    </div>
                  </TabPanel>
                </SwipeableViews>
              </div>
            </Container>
          </React.Fragment>
        </div>
      </>
    )
}
const mapDispatchToProp =(dispatch)=>{
  return {
      dispatchtoAction:(name)=>{dispatch(Addtocart(name))}
  }
}
export default connect(null,mapDispatchToProp)(Products)
