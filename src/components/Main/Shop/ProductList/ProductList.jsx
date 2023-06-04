
import ProductItem from '../ProductItem/ProductItem';

import { Plant } from '../../../../models/Plant';
import { Cart } from '../../../../models/Cart';

import { plantsDb } from '../../../../db/plants';
import { useEffect, useState } from 'react';

const ProductList = () => {

    const [plantsList, setPLantsList] = useState([]);
    const [list, setList] = useState([]);
    const cart = new Cart();

    useEffect(() => {
        const newList = [];
        plantsDb.map(({id,name,img,price,discountPrice,sale,discount,date,liked,added}) => {
            newList.push(new Plant(id,name,img,price,sale,discount,date,liked,discountPrice,added,cart));
        })
        setPLantsList([...newList]);
    },[])

    useEffect(() => {
        if(plantsList.length >= 1) {
            const newList = plantsList.map(({img,name,price,id},i) => {
                return(
                    <ProductItem 
                        key={i}
                        img={img}
                        name={name}
                        price={price}
                        id={id}
                    />
                )
            });
            setList([...newList])
        }
    },[plantsList])

    return(
        <div className="shop__items-wrapper">
            {list}
            <div className="shop__switcher">
                <div className="shop__switch-page active">1</div>
                <div className="shop__switch-page">2</div>
                <div className="shop__switch-page">3</div>
            </div>
        </div>
    )
}

export default ProductList