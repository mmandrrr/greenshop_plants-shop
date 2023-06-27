import { useEffect, useState } from 'react';

import ProductList from './ProductList/ProductList';
import SideBar from './SideBar/SideBar';
import Filters from './Filters/Filters';

const Shop = ({cartArr,setCartArr,plantsData,setPlantsData,productsList}) => {

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
                        productsList={productsList}
                    />
                    <ProductList 
                        plantsData={plantsData}
                        productsList={productsList}
                        cartArr={cartArr}
                        setCartArr={setCartArr}
                    />
                </div>
            </div>
        </section>
    )
}

export default Shop
