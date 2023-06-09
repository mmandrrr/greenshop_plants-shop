import sale from '../../../../assets/sidebar/super-sale-min.png';

import Categories from './Categories';
import PriceSlider from './PriceSlider';
import Sizes from './Sizes';

const SideBar = ({setPlantsData}) => {
    return(
        <aside className="shop__sidebar">
            <Categories />
            <PriceSlider />
            <Sizes 
                setPlantsData={setPlantsData}
            />
            <img src={sale} alt="Sale" />
        </aside>
    )
}

export default SideBar