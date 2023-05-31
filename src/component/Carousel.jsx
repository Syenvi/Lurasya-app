import { useEffect, useState } from "react"

export default function Carousel({
    children:slides,
    autoSlide=false,
    autoSlideInterval=3000
}){
    const [curr, setCurr] = useState(0)

    const prev =()=> setCurr(curr => curr === 0? slides.length -1:curr-1)
    const next =()=> setCurr(curr => curr ===  slides.length -1 ? 0 :curr+1)

    useEffect(()=>{
        if(!autoSlide)return
        const slideInterval = setInterval(next,autoSlideInterval)
        return()=>clearInterval(slideInterval)
    },[])

    return(
        <div className="relative overflow-hidden">
            <div className="flex transition-transfrom ease-out duration-500" style={{transform : `translateX(-${curr*100}%)`}}>{slides}</div>
           
        </div>
    )
}