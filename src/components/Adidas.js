import React, { useEffect } from 'react'
import { Container, Paper, Grid, makeStyles, Typography, Button } from '@material-ui/core'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Addtocart} from '../actions/Addtocart';
import {connect} from 'react-redux';
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

const Adidas = (propsVal) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            <div className={classes.props}><Typography variant="h4" component="h2">{"Adidas Shoes"}</Typography></div>
            <div style={{ padding: 20 }}>
            <React.Fragment>
                <Container fixed>
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
                                        <Button variant="contained" color="primary" onClick={()=>{navigate('/')}}>
                                            <ArrowBackIcon/>Back to home
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
const mapDispatchToProp =(dispatch)=>{
    return {
        dispatchtoAction:(name)=>{dispatch(Addtocart(name))}
    }
  }
export default connect(null,mapDispatchToProp)(Adidas)
