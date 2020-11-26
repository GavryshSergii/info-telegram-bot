import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  header__logo: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    borderRadius: '20%',
    [theme.breakpoints.up('sm')]: {
      height: '7rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '5rem',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <a href="/" className={classes.header__logo}>
        <img
          src="images/logo1.png"
          alt="Logo"
          className={classes.logo}
        />
      </a>
    </header>
  );
};

export default Header;
