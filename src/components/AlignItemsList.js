import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
//setting the styles for the list 
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'flex',
  },
}));
//exporting(so that We can use it as a component) and making the function

export default function AlignItemsList() {
  const classes = useStyles();
  //using the useState hook to take api datas in  array
  const [info,setInfo] = useState([]);
  //using the UseEffect hook to fetch the data and set those datas in info array
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp=>resp.json())
    .then(resp=>{
      console.log(resp)
        setInfo(resp)
    })

},[])


  return (
    <List className={classes.root}>
      {/* using map to take each of the item from the info array */}
       {info.map((item,key)=>{
         return<>
        <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {item.email}
              </Typography>
              {item.address.street}{", "}{item.address.city}{", "}{item.address.zipcode}
            </React.Fragment>
          }
        />

        </ListItem>
        <Divider variant="inset" component="li" /> 
        </>
      })}
      
    
    </List>
  );
}
