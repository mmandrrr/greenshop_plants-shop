import { plantsDb } from "../../../../db/plants";
import { Filter } from "../../../../services/setFilterForPlants";
import { setActiveItem } from "../../../../services/setActiveItem";

const Sizes = ({setPlantsData}) => {

    const filter = new Filter(plantsDb);

    return(
        <div className="shop__size shop__sidebar-section">
            <h3 className="shop__title">
                Size
            </h3>
            <article 
                onClick={e => {
                    setActiveItem(e);
                    filter.setFilterBySmall(setPlantsData);
                }}
                id="0"
                className="shop__size-article">
                Small <span>(119)</span>
            </article>
            <article 
                onClick={e => {
                    setActiveItem(e);
                    filter.setFilterByMedium(setPlantsData);
                }}
                id="1"
                className="shop__size-article">
                Medium <span>(119)</span>
            </article>
            <article 
                onClick={e => {
                    setActiveItem(e);
                    filter.setFilterByLarge(setPlantsData);
                }}
                id="2"
                className="shop__size-article">
                Large <span>(119)</span>
            </article>
        </div>
    )
}

export default Sizes