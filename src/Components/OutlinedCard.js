import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import akshayImg from "../20MCA002.jpg"
const card = (
  <React.Fragment>
    <CardContent style={{backgroundColor:'grey'}} align='center'>
    <img width="50%"  src={akshayImg} />
      <Typography variant='h5' >
        Akshay Ramnani
      </Typography>
      <p style={{color:'red'}}>Full Stack Developer</p>
      <Box>
        <Button color="success" variant='contained'>
          Email me
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="success" variant='contained'>
          Call me
        </Button>
      </Box>
      <br/>
      <Typography variant="body2">
        Hey there Akshay here, having expertise on Front-End side and Cloud Side, Right now just coding randomly
      </Typography>
      <br/>
      
      
    </CardContent>
    <CardContent style={{backgroundColor:'black'}} align='center'>
      <Box >
        <Button variant='outlined'  >Linkedin</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='outlined'> Instagram</Button>
      </Box>
    </CardContent>
    
      
      
    
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box style={{backgroundColor:'yellow'}} width="35%" alignItems="center">
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}