import { useState } from 'react';
import sale from '../../../../assets/sidebar/super-sale-min.png';

import Categories from './Categories';
import PriceSlider from './PriceSlider';
import Sizes from './Sizes';

const SideBar = ({plantsData,setPlantsData}) => {

    const [className, setClassName] = useState('shop__sidebar');

    const toggleSideBar = (e) => {
        if(e.target.classList.contains('active') || e.target.parentNode.parentNode.classList.contains('active') || e.target.parentNode.classList.contains('active')) {
            setClassName('shop__sidebar');
        } else {
            setClassName('shop__sidebar active');
        }
    }

    return(
        <aside onClick={e => toggleSideBar(e)} className={className}>
            <Categories />
            <PriceSlider />
            <Sizes 
                plantsData={plantsData}
                setPlantsData={setPlantsData}
            />
            <img src={sale} alt="Sale" />
        </aside>
    )
}

export default SideBar