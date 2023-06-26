import { plantsDb } from "../../../../db/plants";
import { Filter } from "../../../../services/setFilterForPlants";
import { setActiveItem } from "../../../../services/setActiveItem";

const Sizes = ({plantsData,setPlantsData}) => {

    const filter = new Filter(plantsDb,plantsData);

    return(
        <div className="shop__size shop__sidebar-section">
            <h3 className="shop__title">
                Size
            </h3>
            <Article    
                id={0}
                size='Small'
                dataAttribute="small"
                filter={e => filter.setBySizeFilter(e,setPlantsData)}
             />
             <Article
                id={1}
                size='Medium'
                dataAttribute="medium"
                filter={e => filter.setBySizeFilter(e,setPlantsData)}
             />
             <Article
                id={2}
                size='Large'
                dataAttribute="large"
                filter={e => filter.setBySizeFilter(e,setPlantsData)}
             />
        </div>
    )
}

export default Sizes

const Article = ({id,size,dataAttribute,filter}) => {


    return(
        <article 
            onClick={e => {
                setActiveItem(e);
                filter(e)
            }}
            data-id={id}
            data-size={dataAttribute}
            className="shop__size-article">
            {size} <span>(119)</span>
        </article>
    )
}