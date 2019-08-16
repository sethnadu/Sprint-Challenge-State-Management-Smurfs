import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const Smurf = (props) => {
    console.log(props)
    const classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.smurf.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.smurf.age}
        </Typography>
        <Typography variant="body2" component="p">
        {props.smurf.height}
        </Typography>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>
  );
}

export default Smurf;