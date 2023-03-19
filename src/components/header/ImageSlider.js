import './ImageSlider.css'
import React, {useState, useRef} from 'react'
import { useTransition, animated } from '@react-spring/web'


const slides = [
  'photo-1544511916-0148ccdeb877',
  'photo-1544572571-ab94fd872ce4',
  'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
  'photo-1540206395-68808572332f',
]
function ImageSlider(){
 const initialRender = useRef(true)
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: 'scale(1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.97)' },
    config: {tension: 280, friction: 120, duration: 2000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set(state => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: false,
    delay: ()=>{
      if (initialRender.current){
        initialRender.current=false
        return 0
      } 
       return 10000  }
  })
  return (
    <div className='image-slider'>
      {transitions((style, i) => (
        <animated.div
          className='bg'
          style={{
            ...style,
            backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
          }}
        />
      ))}
    </div>
  )
}

export default ImageSlider;