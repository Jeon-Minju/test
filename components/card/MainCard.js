import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: "center",
    color: "#434f5b"
  },
  contentBlue: {
    color: '#297bff',
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    }
  },
  content: {
    color: "#434f5b",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    }
  },
  subText : {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
    }
  }
}));


export default function SimpleCard(props) {
  const { title, content, type } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="p" component="p" className={classes.subText}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          className={ title !== '영업일' ? classes.contentBlue : classes.content}
          display="inline"
        >
          <strong>{content}</strong>
        </Typography>
        { type ?
          <Typography
            variant="p"
            component="p"
            display="inline"
            className={classes.subText}
          >
            {type}
          </Typography>
          : null
         }
      </CardContent>
    </Card>
  );
}
