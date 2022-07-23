import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import { useAlert } from "react-alert";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
export default function CartCard({id,price,image,category,title,deleteChange ,item_count}) {
  const classes = useStyles();

  const alert = useAlert()

  return (
    <div  className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography style = {{fontWeight  : "lighter"}} gutterBottom variant="subtitle1">
                 {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {category}
                </Typography>
                <Typography style = {{color : "gray" , fontWeight : "inherit"}} variant="body2" color="textSecondary">
                Quantity : {item_count}
                </Typography>
              </Grid>
              <Grid item>
                   <button  onClick = {()=>{
                    deleteChange(id)
                    alert.success("item remove from Cart")
                }} variant="body2" style={{ borderRadius : "5px"  ,  cursor: 'pointer'  , background : "green" , border : "none" , color : "white" }}>
                  Remove
                </button> 
                
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$ {price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper> 
    </div>
  );
}
