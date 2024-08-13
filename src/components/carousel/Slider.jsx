// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import './Slider.css';


// function Slider() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//      <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//       <div className='Subcarousal2'>
//             <img src="/images/products/jbl660nc-1.png" alt='jbl'/>
//       </div>

//       <Carousel.Caption>
//         <div className='Carousal'> 
//           <div  className='Subcarousal1'>
//             <h3>JBL LIVE 660NC</h3>
//             <p>Keep The Noise Out, Or In .You Choose.</p>
//             <p><span>₹9,999</span><strike>₹2,990</strike></p>
//             <button>Shop Now</button>
//           </div>
         
//         </div>
//       </Carousel.Caption>
//       </Carousel.Item>
      
//       <Carousel.Item>
//       <div className='Subcarousal2'>
//             <img src="/images/products/jbl660nc-1.png" alt='jbl'/>
//           </div>
    
//         <Carousel.Caption>
          
//           <h3>boAt Airdopes 131</h3>
//           <p>Featherweight For Comfort All-Day.</p>
//           <p><span>₹1,099</span><strike>₹2,990</strike></p>
//           <button>Shop Now</button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className='Subcarousal2'>
//             <img src="/images/products/jbl660nc-1.png" alt='jbl'/>
//           </div>
       
//         <Carousel.Caption>
          
//           <h3>Sony WH-XB910N</h3>
//           <p>Give Your Favourite Music A Boost.</p>
//           <p><span>₹13,489</span><strike>₹19,990</strike></p>
//           <button>Shop Now</button>
          
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;





import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} controls={false}>
    
      <Carousel.Item>

      <div className='Subcarousal2'>
            <img src="/images/products/jbl660nc-1.png" alt='jbl'/>
      </div>
        <Carousel.Caption>
        <div  className='Subcarousal1'>
        <h1>Over Ear</h1>
      <h3>JBL LIVE 660NC</h3>
             <p>Keep The Noise Out,<br /> Or In .You Choose.</p>
             <h4><span>₹9,999</span><strike>₹2,990</strike></h4>
             <button >Shop Now</button>
           </div>  
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <div className='Subcarousal2'>
             <img src="/images/products/boat131-1.png" alt='jbl'/>
      </div>
       
        
        <Carousel.Caption>
        <div  className='Subcarousal1'>
        <h1>In Ear</h1>
    <h3>boAt Airdopes 131</h3>
         <p>Featherweight For <br/>Comfort All-Day.</p>      
        <h4><span>₹1,099</span><strike>₹2,990</strike></h4>  
        <button>Shop Now</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='Subcarousal2'>
            <img src="/images/products/sonyxb910n-1.png" alt='jbl'/>
           </div>
       
        <Carousel.Caption>
        <div  className='Subcarousal1'>
          <h1>Over Ear</h1>
      <h3>Sony WH-XB910N</h3>
          <p>Give Your Favourite Music <br/> A Boost.</p>
           <h4><span>₹13,489</span><strike>₹19,990</strike></h4>
           <button>Shop Now</button>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Slider;
