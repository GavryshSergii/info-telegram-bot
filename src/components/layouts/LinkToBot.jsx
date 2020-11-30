import React from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    zIndex: 5,
  },
}));

const LinkToBot = (props) => {
  const { window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <Fab
        color='primary'
        href='tg://resolve?domain=TruckUAbot1'
        variant='extended'
        aria-label="link to TruckUAbot"
        className={classes.root}
      >
        <img src="images/Telegram_logo.svg" alt='' height='30vh'/>
        TruckUAbot
      </Fab>
    </Zoom>
  );
};

export default LinkToBot;
