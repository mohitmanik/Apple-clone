import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import {heroVideo, smallHeroVideo} from '../utils'
import {useGSAP} from '@gsap/react'
const Hero = () => {

  const [videoSrc,setvideoSrc] = useState(window.innerWidth<760?smallHeroVideo:heroVideo)

   const handleSrc= ()=>{
        if(window.innerWidth<760){
          setvideoSrc(smallHeroVideo); 
        }else{
          setvideoSrc(heroVideo); 
        }
   }

   useEffect(()=>{
    window.addEventListener('resize',handleSrc); 

    return ()=>{
      window.removeEventListener('resize',handleSrc); 
    }
   })

  useGSAP(()=>{
   gsap.to('#hero',{
    opacity:1,delay:2
   })

   gsap.to("#cta",{
    translateY:-20,opacity:1,delay:2,duration:0.6
   })
  },[])
  
  return (
    <section className='w-full nav-height bg-black relative'>
    <div className="h-5/6 w-full flex-center flex-col">
    <p className='hero-title' id='hero'>iPhone 15 Pro</p>

    <div className="md:w-10/12 w-9/12">
        <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} >
          <source src={videoSrc} type='video/mp4'/>
        </video>
    </div>
    </div>
      

     <div className="flex flex-col items-center opacity-0 translate-y-20" id='cta'>
   
    <a href="#highlights" className='btn'>Buy</a>
    <a className='font-normal text-xl'>From $199/month or $999</a>
     </div>

    </section>
  )
}

export default Hero
