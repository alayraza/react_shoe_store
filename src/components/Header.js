import React from 'react'
import {useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import clsx from 'clsx';
import {connect} from 'react-redux';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Cartlist from './Cartlist';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    cart:{
        color:'white'
    },
    fade: {
      padding: theme.spacing(2),
    },
  }));
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 6,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

const Header = (props) => {
    // console.log("total",props.value.cart.length)
    const classes = useStyles();
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }  
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Home','Nike', 'Catterpillar', 'Adidas'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index === 0 ? <HomeIcon/> : <AppsIcon />}</ListItemIcon>
                <ListItemText primary={text} onClick={()=>{navigate('/'+text)}}/>
              </ListItem>
            ))}
          </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon onClick={toggleDrawer("left", true)}/>
                        <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                            {list("left")}
                        </Drawer>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Shoes Store
                    </Typography>
                    <PopupState variant="popper" popupId="demo-popup-popper">
                      {(popupState) => (
                        <div>
                          <IconButton aria-label="cart" {...bindToggle(popupState)}>
                            <StyledBadge badgeContent={props.value.cart.length} color="secondary">
                                <ShoppingCartIcon className={classes.cart}/>
                            </StyledBadge>
                          </IconButton>
                          <Popper {...bindPopper(popupState)} transition>
                            {({ TransitionProps }) => (
                              <Fade {...TransitionProps} timeout={350}>
                                <Cartlist/>
                              </Fade>
                            )}
                          </Popper>
                        </div>
                      )}
                    </PopupState>  
                </Toolbar>
            </AppBar>
               
        </div>
    )
}
const mapStateToProp =(state)=>{
  return {
      value:state
  }
}
export default connect(mapStateToProp)(Header)
