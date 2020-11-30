import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(to right, #21201d, #151515)',
  },
  root__container: {
    padding: theme.spacing(0),
    height: 718,
    position: 'relative',
    background: 'url(/images/globe_grey.png) calc(40% - 4px) 50%/583px 613px no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  text: {
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      textAlign: 'center',
    },
  },
  workSteps: {
    listStyle: 'none',
    width: '45%',
    [theme.breakpoints.down('md')]: {
      width: '65%',
    },
  },
  listItem: {
    display: 'block',
    paddingBottom: theme.spacing(4),
    zIndex: '2',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      fontWeight: '700',
      fontSize: '60px',
      display: 'block',
      lineHeight: '30px',
      color: theme.palette.text.secondary,
      top: '-19px',
      paddingLeft: '6px',
      left: '-62px',
      zIndex: '-1',
      border: '1px dashed #c8b391',
      borderTop: 'none',
      borderLeft: 'none',
      borderRadius: '50%',
      width: '76px',
      height: '76px',
    },
  },
  firstItem: {
    '&::after': {
      content: "'1'",
    },
  },
  secondItem: {
    marginLeft: '75px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    '&::after': {
      content: "'2'",
    },
  },
  thirdItem: {
    marginLeft: '75px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    '&::after': {
      content: "'3'",
    },
  },
  fourthItem: {
    marginLeft: 0,
    '&::after': {
      content: "'4'",
    },
  },
}));

const JobDescriptionBot = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.root__container}>
        <Box className={classes.text}>
          <Typography variant='h4' color='textSecondary'>
            ВІД <b>ЗАМОВНИКА</b>
          </Typography>
          <Typography variant='h4' color='textSecondary'>
            ДО <b>ВИКОНАВЦЯ</b>
          </Typography>
        </Box>
        <ul className={classes.workSteps}>
          <li className={clsx(classes.listItem, classes.firstItem)}>
            <Typography variant='h4' color='textSecondary' className={classes.firstHeader}>
              Створення заявки диспетчером
            </Typography>
            <Typography color='textSecondary'>
              Заявка створюється з точними характеристиками вантажу, вказується детальний маршрут,
              статична вартість чи запит тарифу на послуги перевезення. Бот автоматично розсилає по
              вказаним параметрам перевізникам заявку
            </Typography>
          </li>
          <li className={clsx(classes.listItem, classes.secondItem)}>
            <Typography variant='h4' color='textSecondary'>
              Прийом заявки перевізником
            </Typography>
            <Typography color='textSecondary'>
              Водію надходить заявка на вантаж з усіма параметрами, прийняття рішення виконавцем.
              Контактні дані водія надходять диспетчеру та вони зв’язуються напряму для уточнення
              деталей
            </Typography>
          </li>
          <li className={clsx(classes.listItem, classes.thirdItem)}>
            <Typography variant='h4' color='textSecondary'>
              Виконання перевезення
            </Typography>
            <Typography color='textSecondary'>
              Водій зв’язується з клієнтом, транспортує вантаж до місця розвантаження, оплата
              послуг,
              всі задоволені.
            </Typography>
          </li>
          <li className={clsx(classes.listItem, classes.fourthItem)}>
            <Typography variant='h4' color='textSecondary'>
              Замовлення виконане
            </Typography>
            <Typography color='textSecondary'>
              Сторони обмінюються відгуками щодо роботи
            </Typography>
          </li>
        </ul>
      </Container>
    </Box>
  );
};

export default JobDescriptionBot;
