<<<<<<< HEAD
import { setActiveItem } from '../../../../services/setActiveItem';
import { Sort } from '../../../../services/setSort';
=======
>>>>>>> test
import { useState } from 'react';

import { setActiveItem } from '../../../../services/setActiveItem';
import { Sort } from '../../../../services/setSortForPlants';
import { Filter } from '../../../../services/setFilterForPlants';

import { plantsDb } from '../../../../db/plants';

import arrowDown from '../../../../assets/shop/arrow-down.svg';

const Filters = ({plantsData,setPlantsData}) => {

<<<<<<< HEAD
    const [activeSort, setActiveSort] = useState('Alphabetically');
    const sort = new Sort();
=======
    const [activeSort, setActiveSort] = useState('Alphabet');
    const sort = new Sort();
    const filter = new Filter(plantsDb);
>>>>>>> test

    return(
        <div className="shop__filters">
            <ul className="shop__filter">
                <li 
                    onClick={e => {
                        setActiveItem(e);
                        filter.returnAll(setPlantsData)
                    }} 
                    id='0' 
                    className="shop__filter-item active">All Plants</li>
                <li 
                    onClick={e => {
                        setActiveItem(e);
                        filter.setFilterByNew(setPlantsData)
                    }} 
                    id='1' 
                    className="shop__filter-item">New Arrivals</li>
                <li 
                    onClick={e => {
                        setActiveItem(e);
                        filter.setFilterBySale(setPlantsData)
                    }} 
                    id='2' 
                    className="shop__filter-item">Sale</li>
            </ul>
            <div className="shop__sort">
                Sort by: 
                <ul className='shop__sort-list'>
                    <li className='active'>{activeSort}</li>
<<<<<<< HEAD
                    <li onClick={e => sort.setSort(e,setActiveSort)} data-sort='Alphabetically'>Alphabetically</li>
                    <li onClick={e => sort.setSort(e,setActiveSort)} data-sort='Price'>Price</li>
                    <li onClick={e => sort.setSort(e,setActiveSort)} data-sort='Date'>Date</li>
=======
                    <li 
                        onClick={e => sort.setSortByAlphabet(e,setActiveSort,plantsData,setPlantsData)} 
                        data-sort='Alphabet'>Alphabet</li>
                    <li 
                        onClick={e => sort.setSortByPrice(e,setActiveSort,plantsData,setPlantsData)} 
                        data-sort='Price'>Price</li>
                    <li 
                        onClick={e => sort.setSortByDate(e,setActiveSort,plantsData,setPlantsData)} 
                        data-sort='Date'>Date</li>
>>>>>>> test
                </ul> 
                <img className='img' src={arrowDown} alt="arrow" />
            </div>
        </div>
    )
}

export default Filters