
import ProductItem from '../ProductItem/ProductItem';

import { Plant } from '../../../../models/Plant';

import { useEffect, useState,useMemo } from 'react';

import { ProductListPagination } from '../../../../services/ProductListPagination';

import { setActiveItem } from '../../../../services/setActiveItem';

const ProductList = ({plantsData,cartArr,setCartArr}) => {

    const [plantsList, setPLantsList] = useState([]);
    const [list, setList] = useState([]);
    const [switchList, setSwitchList] = useState([]);

    useEffect(()  => {
        const newList = [];
        plantsData.map(({id,name,img,price,discountPrice,sale,discount,date,liked,added}) => {
            newList.push(new Plant(id,name,img,price,sale,discount,date,liked,discountPrice,added,cartArr));
        })
        const pagination = new ProductListPagination(newList);  
        setPLantsList([...pagination.showNineProducts(0)]);
    },[plantsData])

    useEffect(() => {
        if(plantsList.length >= 1) {
            const newList = plantsList.map(({img,name,price,id,addToCart}) => {
                return(
                    <ProductItem 
                        key={id}
                        img={img}
                        name={name}
                        price={price}
                        id={id}     
                        addToCart={addToCart} 
                        cartArr={cartArr}
                        setCartArr={setCartArr}                  
                    />
                )
            });
            setList([...newList])
        }

        const newList = [];
        plantsData.map(({id,name,img,price,discountPrice,sale,discount,date,liked,added}) => {
            newList.push(new Plant(id,name,img,price,sale,discount,date,liked,discountPrice,added,cartArr));
        })
        const pagination = new ProductListPagination(newList);
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
                        className={`${i === 0 ? 'shop__switch-page active' : 'shop__switch-page'}`}>{item + 1}</div>
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