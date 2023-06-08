import { setActiveItem } from '../../../../services/setActiveItem';
import { Sort } from '../../../../services/setSort';
import { useState } from 'react';

import arrowDown from '../../../../assets/shop/arrow-down.svg';

const Filters = () => {

    const [activeSort, setActiveSort] = useState('Alphabetically');
    const sort = new Sort();

    return(
        <div className="shop__filters">
            <ul className="shop__filter">
                <li onClick={e => setActiveItem(e)} id='0' className="shop__filter-item active">All Plants</li>
                <li onClick={e => setActiveItem(e)} id='1' className="shop__filter-item">New Arrivals</li>
                <li onClick={e => setActiveItem(e)} id='2' className="shop__filter-item">Sale</li>
            </ul>
            <div className="shop__sort">
                Sort by: 
                <ul className='shop__sort-list'>
                    <li className='active'>{activeSort}</li>
                    <li onClick={e => sort.setSort(e,setActiveSort)} data-sort='Alphabetically'>Alphabetically</li>
                    <li onClick={e => sort.setSort(e,setActiveSort)} data-sort='Price'>Price</li>
                    <li onClick={e => sort.setSort(e,setActiveSort)} data-sort='Date'>Date</li>
                </ul> 
                <img className='img' src={arrowDown} alt="arrow" />
            </div>
        </div>
    )
}

export default Filters