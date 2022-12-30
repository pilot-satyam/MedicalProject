import ImageSlider, { Slide } from "react-auto-image-slider";
import '../Style/Global.css';
import {Container} from 'reactstrap'
function SliderAuto() {

  // style={{ width: "50%", height:"50%" }}
  return (
  <div>
    {/* <Container className="text-center"> */}
    <ImageSlider effectDelay={200} autoPlayDelay={1500}>
      <Slide >
        <img alt="img2" src="ImageOne.jpg" />
      </Slide>
      <Slide >
        <img alt="img2" src="ImageTwo.jpg" /> 
      </Slide>
      <Slide>
        <img alt="img1" src="ImageThree.jpg" />
      </Slide>
      <Slide >
        <img alt="img1" src="ImageFour.jpg" />
      </Slide>
      <Slide >
        <img alt="img1" src="ImageFive.jpg"/>
      </Slide>
    </ImageSlider>
    {/* </Container> */}
  </div> 
  );
}
export default SliderAuto;













// import "../Style/FooterAuto.css";
// import React from "react";

// const colors = ["Image1.jpg","Image2.jpg","Image3.jpg","Image4.jpg","Image5.jpg"];
// const delay = 2500;

// function Slideshow() {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slideshow;

// ReactDOM.render(<Slideshow />, document.getElementById("App"));
