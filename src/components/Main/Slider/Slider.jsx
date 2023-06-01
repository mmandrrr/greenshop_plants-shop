import { useState } from "react";

import Slide from "./Slide";

import { SlideChanger } from "../../../services/slideChanger";

const Slider = () => {

    const [translate, setTranslate] = useState(0),
          slider = new SlideChanger();


    return(
        <section className="slider">
            <div className="slider__container container">
                <div style={{transform: `translateX(-${translate}%)`}} className="slider__wrapper">
                    <Slide 
                        subtitle='Welcome to GreenShop'
                        title='Let’s Make a Better'
                        text='We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!'
                    />
                    <Slide 
                        subtitle='Welcome to GreenShop1'
                        title='Let’s Make a Better'
                        text='We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!'
                    />
                    <Slide 
                        subtitle='Welcome to GreenShop2'
                        title='Let’s Make a Better'
                        text='We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!'
                    />
                </div>
                <div className="slider__dots">
                    <span onClick={e => slider.changeSlide(e,setTranslate)} id="0" className="slider__dot active"></span>
                    <span onClick={e => slider.changeSlide(e,setTranslate)} id="1" className="slider__dot"></span>
                    <span onClick={e => slider.changeSlide(e,setTranslate)} id="2" className="slider__dot"></span>
                </div>
            </div>
        </section>
    )
}

export default Slider