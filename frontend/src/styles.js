import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: 'rgb(0,100,0,1)',
    fontFamily:'Rubik Glitch Pop',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px', 
    },
  },
  image: {
    marginLeft: '15px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '10px', 
    },
  },
}));
