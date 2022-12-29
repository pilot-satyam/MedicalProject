import ImageSlider, { Slide } from "react-auto-image-slider";
import '../Style/Global.css';
import {Container} from 'reactstrap'
function SliderAuto() {
  return (
    <Container className="text-center" style={{"width":"100%", "height":"100%"}}>
    <ImageSlider effectDelay={200} autoPlayDelay={1500} style ={{"width":"50px", "height":"50px"}}>
      <Slide>
        <img alt="img2" src="Image1.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="Image2.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="Image3.jpg" />2
      </Slide>
      <Slide>
        <img alt="img1" src="Image4.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="Image5.jpg" />
      </Slide>
    </ImageSlider>
    </Container>
  );
}

export default SliderAuto;