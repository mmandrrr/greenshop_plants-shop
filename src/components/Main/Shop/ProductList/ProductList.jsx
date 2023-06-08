
import ProductItem from '../ProductItem/ProductItem';

import { Plant } from '../../../../models/Plant';
import { Cart } from '../../../../models/Cart';

import { plantsDb } from '../../../../db/plants';
import { useEffect, useState } from 'react';

import { ProductListPagination } from '../../../../services/ProductListPagination';

import { setActiveItem } from '../../../../services/setActiveItem';

const ProductList = () => {

    const [plantsList, setPLantsList] = useState([]);
    const [list, setList] = useState([]);
    const [switchList, setSwitchList] = useState([]);
    const cart = new Cart();

    useEffect(() => {
        const newList = [];
        plantsDb.map(({id,name,img,price,discountPrice,sale,discount,date,liked,added}) => {
            newList.push(new Plant(id,name,img,price,sale,discount,date,liked,discountPrice,added,cart));
        })
        const pagination = new ProductListPagination(newList);  
        setPLantsList([...pagination.showNineProducts(0)]);
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

        const pagination = new ProductListPagination(plantsDb);
        const switchList = pagination.generateSwitcher();
        if(switchList.length >= 1) {
            const newList = switchList.map((item,i) => {
                return(
                    <div onClick={e => {
                        setActiveItem(e);
                        setPLantsList([...pagination.showNineProducts(e.target.id)]);
                    }} 
                        id={item} 
                        key={i} 
                        className="shop__switch-page">{item + 1}</div>
                )
            })
            setSwitchList([...newList]);
        }
    },[plantsList])

    return(
        <div className="shop__items-wrapper">
            {list}
            <div className="shop__switcher">
                {switchList}
            </div>
        </div>
    )
}

export default ProductList