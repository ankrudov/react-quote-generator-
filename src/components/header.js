import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:4,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar className={classes.title} variant="dense">
            <Typography variant="h6" color="inherit">
                Tolkien Quote-Anator
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}