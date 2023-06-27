import { useState } from 'react';

import { setActiveItem } from '../../../../services/setActiveItem';
import { Filter } from '../../../../services/setFilterForPlants';

import { plantsDb } from '../../../../db/plants';

import arrowDown from '../../../../assets/shop/arrow-down.svg';

const Filters = ({plantsData,setPlantsData,productsList}) => {

    const [activeSort, setActiveSort] = useState('Alphabet');
    const filter = new Filter(productsList,plantsData);

    return(
        <div className="shop__filters">
            <ul className="shop__filter">
                <li 
                    onClick={e => {
                        setActiveItem(e);
                        filter.returnAll(setPlantsData)
                    }} 
                    data-id='0' 
                    className="shop__filter-item active">All Plants</li>
                <li 
                    onClick={e => {
                        setActiveItem(e);
                        filter.setFilterByNew(setPlantsData)
                    }} 
                    data-id='1' 
                    className="shop__filter-item">New Arrivals</li>
                <li 
                    onClick={e => {
                        setActiveItem(e);
                        filter.setFilterBySale(setPlantsData)
                    }} 
                    data-id='2' 
                    className="shop__filter-item">Sale</li>
            </ul>
            <div className="shop__sort">
                Sort by: 
                <ul className='shop__sort-list'>
                    <li className='active'>{activeSort}</li>
                    <li 
                        onClick={e => filter.setSortByAlphabet(e,setActiveSort,setPlantsData)} 
                        data-sort='Alphabet'>Alphabet</li>
                    <li 
                        onClick={e => filter.setSortByPrice(e,setActiveSort,setPlantsData)} 
                        data-sort='Price'>Price</li>
                    <li 
                        onClick={e => filter.setSortByDate(e,setActiveSort,setPlantsData)} 
                        data-sort='Date'>Date</li>
                </ul> 
                <img className='img' src={arrowDown} alt="arrow" />
            </div>
        </div>
    )
}

export default Filters