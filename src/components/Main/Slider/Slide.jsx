import Button from "../../ServiceElements/Button"

const Slide = ({subtitle, title, text}) => {
    return(
        <div className="slider__slide">
            <h2 className="slider__subtitle">{subtitle}</h2>
            <h1 className="slider__title">{title} <span>Planet</span></h1>
            <p className="slider__text fz_14px-reg">
                {text}
            </p>
            <a href="#shop">
                <Button 
                    text='SHOP NOW'
                />
            </a>
        </div>
    )
}

export default Slide