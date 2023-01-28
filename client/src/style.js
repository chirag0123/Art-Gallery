import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  heading: {
    color: 'rgba(0, 0, 255, 0.562)',
  },
  image: {
    marginLeft: '15px',
  },
   [theme.breakpoints.down('sm')]:{
    mainCointainer:{
      flexDirection:"column-reverse",
    }
   }
  
}));