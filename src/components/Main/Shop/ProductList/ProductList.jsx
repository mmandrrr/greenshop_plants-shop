
import ProductItem from '../ProductItem/ProductItem';

const ProductList = () => {
    return(
        <div className="shop__items-wrapper">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <div className="shop__switcher">
                <div className="shop__switch-page active">1</div>
                <div className="shop__switch-page">2</div>
                <div className="shop__switch-page">3</div>
            </div>
        </div>
    )
}

export default ProductList