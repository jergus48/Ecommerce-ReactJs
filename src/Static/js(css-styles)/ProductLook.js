import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    maxWidth: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  CardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-between'
    
  },
  button: {
    display: 'inline-block',
    padding:0,
    minHeight: 0,
    minWidth: 0,
  },
  
}));