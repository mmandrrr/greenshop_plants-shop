import { useState } from 'react';

import ProductList from './ProductList/ProductList';
import SideBar from './SideBar/SideBar';
import Filters from './Filters/Filters';

import { plantsDb } from '../../../db/plants';

const Shop = () => {

    const [plantsData, setPlantsData] = useState(plantsDb);

    return(
        <section className="shop">
            <div className="shop__container container">
                <SideBar />
                <div className="shop__content">
                    <Filters 
                        plantsData={plantsData}
                        setPlantsData={setPlantsData}
                    />
                    <ProductList 
                        plantsData={plantsData}
                    />
                </div>
            </div>
        </section>
    )
}

export default Shop
