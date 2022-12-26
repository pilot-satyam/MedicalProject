import ImageSlider, { Slide } from "react-auto-image-slider";
import '../Style/Global.css';
import {Container} from 'reactstrap'
function SliderAuto() {
  return (
    <Container className="text-center   ">
    <ImageSlider effectDelay={200} autoPlayDelay={1500} style ={{width:"50%", height:"50%"}}>
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