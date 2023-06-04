import { useEffect, useState } from "react";

import { PriceSlide } from "../../../../services/priceSlide";

const PriceSlider = () => {

    const priceSlide = new PriceSlide(),
          [minVal, setMinVal] = useState(200),
          [maxVal, setMaxVal] = useState(1000),
          [percenteMin, setPercenteMin] = useState(priceSlide.getPercentMin(minVal,1500)),
          [percenteMax, setPercenteMax] = useState(priceSlide.getPercentMax(maxVal,1500));

    useEffect(() => {
        setPercenteMin(priceSlide.getPercentMin(minVal,1500));
    },[minVal])

    useEffect(() => {
        setPercenteMax(priceSlide.getPercentMax(maxVal,1500));
    },[maxVal])

    return(
        <div className="shop__price shop__sidebar-section">
            <h3 className="shop__title">
                Price Range
            </h3>
            <div className="shop__slider">
                <div style={{left:`${percenteMin}%`,right: `${percenteMax}%`}} className="shop__progress"></div>
            </div>
            <div className="shop__inputs">
                <input onInput={e => priceSlide.setValue(e,setMinVal)} className="shop__range min" type="range" name="minRange" id="minRange" min='0' max='1500' value={minVal}/>
                <input onInput={e => priceSlide.setValue(e,setMaxVal)} className="shop__range max" type="range" name="maxRange" id="maxRange" min='0' max='1500' value={maxVal}/>
            </div>
            <div className="shop__price-display">
                <span>Price:</span>
                <span>${minVal}</span>
                <span className="divider"></span>
                <span>${maxVal}</span>
            </div>
        </div>
    )
}

export default PriceSlider