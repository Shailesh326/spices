import * as React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import './carousel.css';
const Demo = () => (
  <Carousel className="carousel-main" autoPlay={true} interval={3000} stopAutoPlayOnHover={false} animation={"slide"} duration={500} cycleNavigation={true} navButtonsAlwaysVisible={true}
            indicators={false}
  >
    {/* Change above line to <> and it works, maybe some issues in carousel */}
    <Paper className='paper'>
      <Typography><img src="https://t4.ftcdn.net/jpg/03/72/16/55/360_F_372165593_nn6iZW5wwRJWw1qwK7EChtNWgxOL3rBg.jpg" className="carousel-image" alt="" /></Typography>
      {/* <Button variant="outlined">Click me please!</Button> */}
    </Paper>
    <Paper className='paper'>
      <Typography><img src="https://wallpapers.com/images/featured/spices-4pngw1qa0xj352zc.jpg" alt="" className="carousel-image" /></Typography>
      {/* <Button variant="outlined">Click me please!</Button> */}
    </Paper>
    <Paper className='paper'>
      <Typography><img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY2VzfGVufDB8fDB8fHww&w=1000&q=80" alt="" className="carousel-image"/></Typography>
      {/* <Button variant="outlined">Click me please!</Button> */}
    </Paper>
    <Paper className='paper'>
      <Typography><img src="https://png.pngtree.com/thumb_back/fh260/background/20210913/pngtree-condiments-spices-ingredients-photograph-image_879523.jpg" alt="" /></Typography>
      {/* <Button variant="outlined">Click me please!</Button> */}
    </Paper>
  </Carousel>
);

export default Demo;