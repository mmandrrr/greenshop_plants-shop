
import ProductList from './ProductList/ProductList';
import SideBar from './SideBar/SideBar';

import Filters from './Filters/Filters';

const Shop = () => {

    

    return(
        <section className="shop">
            <div className="shop__container container">
                <SideBar />
                <div className="shop__content">
                    <Filters />
                    <ProductList />
                </div>
            </div>
        </section>
    )
}

export default Shop
