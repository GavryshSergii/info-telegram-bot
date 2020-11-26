import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import StarIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    background: 'linear-gradient(to right, #21201d, #151515)',
  },
  container: {
    padding: theme.spacing('5vh', 0),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  containerPrising: {
    paddingBottom: '8vh',
  },
  cardPrise: {
    borderRadius: 30,
    background: 'linear-gradient(to right, #c8b391, #746857)',
  },
  price: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: '1 місяць',
    price: '50',
  },
  {
    title: '3 місяці',
    price: '150',
  },
  {
    title: '6 місяців',
    price: '300',
  },
  {
    title: '12 місяців',
    subheader: 'Найпопулярніший',
    price: '500',
  },
];

const ServiceCost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Доступ:
          </Typography>
        </Container>
        <Grid container spacing={5} alignItems="flex-end" className={classes.containerPrising}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} sm={6} md={3} >
              <Card className={classes.cardPrise}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center', variant: 'h4' }}
                  subheaderTypographyProps={{ align: 'center', color: 'prime' }}
                  action={tier.title === '12 місяців' ? <StarIcon/> : null}
                />
                <CardContent>
                  <div className={classes.price}>
                    <Typography component="h2" variant="h3" color='textSecondary'>
                      ₴ {tier.price}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant='h4' align='center' color='textSecondary'>
          При сплаті за 1 рік Ви економите 100 грн
        </Typography>
      </Container>
    </Box>
  )
};

export default ServiceCost;
