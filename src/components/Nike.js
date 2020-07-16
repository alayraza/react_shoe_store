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
        ...theme.typography.button,
        padding: theme.spacing(1),
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

const Nike = (propsVal) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    console.log(propsVal);
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            <div className={classes.props}><Typography variant="h4" component="h2">{"Nike Shoes"}</Typography></div>
            <div style={{ padding: 20 }}>
                <React.Fragment>
                    <Container fixed>
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
const mapStateToProp =(state)=>{
    return {
        value:state
    }
}
const mapDispatchToProp =(dispatch)=>{
    return {
        dispatchtoAction:(name)=>{dispatch(Addtocart(name))}
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Nike)
