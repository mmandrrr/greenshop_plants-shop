import { setActiveItem } from '../../../../services/setActiveItem';
import { setSort } from '../../../../services/setSort';
import { useState } from 'react';

import arrowDown from '../../../../assets/shop/arrow-down.svg';

const Filters = () => {

    const [activeSort, setActiveSort] = useState('Default sorting1');

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
                    <li onClick={e => setSort(e,setActiveSort)} data-sort='Default sorting1'>Default sorting1</li>
                    <li onClick={e => setSort(e,setActiveSort)} data-sort='Default sorting2'>Default sorting2</li>
                    <li onClick={e => setSort(e,setActiveSort)} data-sort='Default sorting3'>Default sorting3</li>
                </ul> 
                <img className='img' src={arrowDown} alt="arrow" />
            </div>
        </div>
    )
}

export default Filters