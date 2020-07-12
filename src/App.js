import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Products } from './components/Products';
import { Nike } from './components/Nike';
import { Catterpillar } from './components/Catterpillar';
import { Adidas } from './components/Adidas';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  props: {
      ...theme.typography.button,
      padding: theme.spacing(4),
      textAlign: 'center',
      background:'#3f51b5',
      color:'#ffff'
  },
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <Routes>
          <Route path="/" element={<Products/>}>
            <Route path="/home" element={<Products/>}></Route>
          </Route>
          <Route path="/Nike" element={<Nike/>}></Route>
          <Route path="/Catterpillar" element={<Catterpillar/>}></Route>
          <Route path="/Adidas" element={<Adidas/>}></Route>
      </Routes>
      <div className={classes.props}>{"Footer"}</div>
    </>
  );
}

export default App;
