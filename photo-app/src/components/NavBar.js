import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CameraAltIcon from '@material-ui/icons/CameraAlt'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: '11rem'
  },
}));

export default function ButtonAppBar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <a href={'/'} className={classes.title}><CameraAltIcon /></a>
          <a href={'/photographers'}><Button color="inherit">Photographers</Button></a>
          <a href={'/blog'}><Button color="inherit">Blog</Button></a>
        </Toolbar>
      </AppBar>
    </div >
  );
}