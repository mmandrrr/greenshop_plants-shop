import { useState } from 'react';
import plant from '../../../assets/products/african-violet-min.png';

import { setActiveItem } from '../../../services/setActiveItem';

const InterestedIn = () => {

    const [translate, setTranslate] = useState(0);

    const translateSlider = (e) => {
        setActiveItem(e);
        setTranslate(e.target.dataset.id);
    }

    return(
        <div className="interested">
            <h2 className="interested__title">
                You may be interested in
            </h2>
            <div style={{transform: `translateX(-${10 * translate}%)`}} className="interested__slider-wrapper">
                <div className="interested__slider-item">
                    <img src={plant} alt="Item Image" />
                    <h3>Beach Spider Lily1</h3>
                    <span>$129.00</span>
                </div>
                <div className="interested__slider-item">
                    <img src={plant} alt="Item Image" />
                    <h3>Beach Spider Lily2</h3>
                    <span>$129.00</span>
                </div>
                <div className="interested__slider-item">
                    <img src={plant} alt="Item Image" />
                    <h3>Beach Spider Lily3</h3>
                    <span>$129.00</span>
                </div>
                <div className="interested__slider-item">
                    <img src={plant} alt="Item Image" />
                    <h3>Beach Spider Lily4</h3>
                    <span>$129.00</span>
                </div>
                <div className="interested__slider-item">
                    <img src={plant} alt="Item Image" />
                    <h3>Beach Spider Lily5</h3>
                    <span>$129.00</span>
                </div>
                <div className="interested__slider-item">
                    <img src={plant} alt="Item Image" />
                    <h3>Beach Spider Lily6</h3>
                    <span>$129.00</span>
                </div>
                <div className="interested__slider-item">
                    <img src={plant} alt="Item Image" />
                    <h3>Beach Spider Lily7</h3>
                    <span>$129.00</span>
                </div>
            </div>
            <div className="interested__slider-dots">
                <span data-id='0' onClick={e => translateSlider(e)} className="interested__sliderdot active"></span>
                <span data-id='1' onClick={e => translateSlider(e)} className="interested__sliderdot"></span>
                <span data-id='2' onClick={e => translateSlider(e)} className="interested__sliderdot"></span>
            </div>
        </div>
    )
}

export default InterestedIn