import React ,{useRef,useEffect} from 'react';


const ImageSlider =({images})=>{

const sliderContainer =useRef(null);
const imgLength = images.length;

let count = 0;
const slideSwitch= (childs,count)=>{
  var incre = 0;
  while(incre < childs.length ){
    if(incre == count){
      childs[incre].style.display = "inline-block";
    }else{
      childs[incre].style.display = "none";
    }
    incre++;
  }
}

useEffect(() => {
  
  const timer = setInterval(()=>{
    slideSwitch(sliderContainer.current.childNodes,count);
    count++;
    if(count == imgLength){
      count = 0;
    }
  },3000)
  return () => {
    clearInterval(timer);
  }
}, [])

const slides = images.map((image,index) => (<div key={index} style={{display:"none"}}><img src={image} height="800px"/></div>))

  return (<div ref={sliderContainer}>
      {slides}
    </div>);
}
export default ImageSlider;



