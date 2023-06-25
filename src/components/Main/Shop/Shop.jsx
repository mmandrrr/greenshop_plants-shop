import { useState } from 'react';

import ProductList from './ProductList/ProductList';
import SideBar from './SideBar/SideBar';
import Filters from './Filters/Filters';

import { plantsDb } from '../../../db/plants';

const Shop = ({cartArr,setCartArr}) => {

    const [plantsData, setPlantsData] = useState(plantsDb);

    return(
        <section id='shop' className="shop">
            <div className="shop__container container">
                <SideBar 
                    plantsData={plantsData}
                    setPlantsData={setPlantsData}
                />
                <div className="shop__content">
                    <Filters 
                        plantsData={plantsData}
                        setPlantsData={setPlantsData}
                    />
                    <ProductList 
                        plantsData={plantsData}
                        cartArr={cartArr}
                        setCartArr={setCartArr}
                    />
                </div>
            </div>
        </section>
    )
}

export default Shop
