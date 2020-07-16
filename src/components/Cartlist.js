import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));
function Loop({props}){
    const arr = props.value.cart.map((item) => 
        <ListItem>
            <ListItemAvatar>
            <Avatar alt={item.productName} src={item.img}/>
            </ListItemAvatar>
            <ListItemText primary={item.productName} secondary={item.quantity}/>
        </ListItem> 
    )
    return arr
}
const Cartlist = (props) => {
    const classes = useStyles();
    console.log(props);
    return (
        <List className={classes.root}>
            <Loop props={props}/>
        </List>
    )
}
const mapStateToProp =(state)=>{
  return {
      value:state
  }
}
export default connect(mapStateToProp)(Cartlist)
// export default Cartlist
