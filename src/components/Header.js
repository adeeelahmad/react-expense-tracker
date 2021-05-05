import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  title: {
    flexGrow: 1,
    
  },
  color: {
    backgroundColor: '#de5d83',
  }
}));

export  function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.color}>
        <Toolbar>
          
          
          <Typography variant="h6" className={classes.title}>
            <TrendingUpIcon /> 
           <br></br>
            Expense Tracker
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
