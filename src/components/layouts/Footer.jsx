import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  footer__container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: theme.spacing('3vh', 8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 5),
    },
    width: '100%',
  },
  footer__copyright: {
    paddingBottom: theme.spacing(3),
  },
  footer__logo: {
    width: '100%',
    maxWidth: 120,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 100,
    },
  },
  footer__about: {
    marginLeft: theme.spacing(3),
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
  linksToSocialNetworks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Footer() {
  const classes = useStyles();
  const breakpointSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <List>
          <ListItemText
            primary='Юридична інформація:'
            primaryTypographyProps={{ align: 'center', variant: 'h6', }}
          />
          <ListItemLink href="docs/privacy_policy.pdf" target="_blank">
            <ListItemIcon>
              <img src="images/acrobatReader.svg" alt='' height='30vh'/>
            </ListItemIcon>
            <ListItemText primary='Політика конфіденційності'/>
          </ListItemLink>
          <ListItemLink href="docs/user_manual.pdf" target="_blank">
            <ListItemIcon>
              <img src="images/acrobatReader.svg" alt='' height='30vh'/>
            </ListItemIcon>
            <ListItemText primary='Інструкція користувача'/>
          </ListItemLink>
          <ListItemLink href="docs/public_offer_agreement.pdf" target="_blank">
            <ListItemIcon>
              <img src="images/acrobatReader.svg" alt='' height='30vh'/>
            </ListItemIcon>
            <ListItemText primary='Договір публічної оферти'/>
          </ListItemLink>
        </List>
        <List className={classes.contactUs}>
          <ListItemText
            primary='Наші контакти:'
            primaryTypographyProps={{ align: 'center', variant: 'h6', }}
          />
          <ListItemLink href="tg://resolve?domain=TruckUAbot" target="_blank">
            <ListItemIcon>
              <img src="images/Telegram_logo.svg" alt='' height='30vh'/>
            </ListItemIcon>
            <ListItemText primary='Технічна підтрика @Truck_ukraine'/>
          </ListItemLink>
          <ListItemLink
            href="https://www.youtube.com/channel/UCGZ2HrnSSCkc3qVSehnVlug"
            target="_blank"
          >
            <ListItemIcon>
              <img src="images/youTube.svg" alt="Канал YouTube" height='30vh'/>
            </ListItemIcon>
            <ListItemText primary='Канал YouTube'/>
          </ListItemLink>
          <ListItemLink href="https://www.instagram.com/Truckuabot" target="_blank">
            <ListItemIcon>
              <img src="images/instagram_2.svg" alt="Сторінка Instagram" height='30vh'/>
            </ListItemIcon>
            <ListItemText primary='Сторінка Instagram'/>
          </ListItemLink>
          <ListItemLink href="https://www.facebook.com/Truckuabot" target="_blank">
            <ListItemIcon>
              <img src="images/Facebook_f_logo.svg" alt="Сторінка Facebook" height='30vh'/>
            </ListItemIcon>
            <ListItemText primary='Сторінка Facebook'/>
          </ListItemLink>
        </List>
      </div>
      <Typography variant={breakpointSm ? 'body2' : 'body1'} className={classes.footer__copyright}>
        &copy; {1900 + new Date().getYear()} Всі права захищені.
      </Typography>
    </footer>
  );
}

export default memo(Footer);
