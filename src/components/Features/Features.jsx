import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root__features: {
    padding: theme.spacing(8, 0, 6),
  },
  player: {
    height: '75vh',
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
      <Container className={classes.root__features}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={7}>
            <iframe
              className={classes.player}
              height="100%"
              width='100%'
              src="http://www.youtube.com/embed/NsFF54uwbq4?autoplay=1&controls=0&mute=1&loop=1&playlist=NsFF54uwbq4&showinfo=0&modestbranding=1"
              title="TruckUAbot"
              frameborder="0"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              color='textSecondary'
            >
              Функціонал Бота
            </Typography>
            <Typography variant="h5" color='textSecondary'>
              кабінет перевізника з фільтрами
            </Typography>
            <Typography variant="h5" color='textSecondary'>
              кабінет диспетчера для створення точних заявок
            </Typography>
            <Typography variant="h5" color='textSecondary'>
              кнопка SOS для швидкого виклику евакуатора
            </Typography>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Features;
