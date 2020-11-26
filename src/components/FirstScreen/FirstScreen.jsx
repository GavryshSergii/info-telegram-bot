import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
// import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
  },
  banner: {
    width: '100%',
    objectFit: 'cover',
    verticalAlign: 'middle',
    zIndex: '-1',
    [theme.breakpoints.up('md')]: {
      height: 820,
    },
  },
  row: {
    position: 'absolute',
    width: '100%',

    //100vw / heightImages * widthImages / 2
    top: 'calc(100vw / 3303 * 2928 / 2)',
    transform: 'translate(0, -50%)',
    [theme.breakpoints.up('md')]: {
      top: 410,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text__container: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(10)
    },
  },
  screenshotPhone: {
  },
}));

const FirstScreen = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src='images/фон.jpg' className={classes.banner} alt=''/>
      <Box className={classes.row}>
        <Container className={classes.container}>
          {/*<Slide direction='up' >*/}
          <Box className={classes.text__container} align='center'>
            <Typography variant='h4' color='textSecondary'>
              Транспортно-логістична система «TruckUAbot» створена для клієнтів, логістів та
              перевізників.
            </Typography>
            <Typography variant='h5' color='textSecondary'>
              використовуючи функції бота ви заощаджуєте свій час, гроші та нерви.
            </Typography>
          </Box>
          {/*</Slide>*/}
          <Hidden smDown>
            <img src='images/screenshotPhone.png' className={classes.screenshotPhone} alt=''/>
          </Hidden>
        </Container>
      </Box>
    </Box>
  );
};

export default FirstScreen;
