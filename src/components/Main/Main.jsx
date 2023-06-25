import Slider from "./Slider/Slider";
import Shop from "./Shop/Shop.jsx";
import PlantCare from "./PlantCare/PlantCare";
import Blog from "./Blog/Blog";


const Main = ({cartArr,setCartArr,plantsData,setPlantsData,productsList}) => {
    return(
        <main className="main">
            <Slider />
            <Shop 
                cartArr={cartArr}
                setCartArr={setCartArr}
                plantsData={plantsData}
                setPlantsData={setPlantsData}
                productsList={productsList}
            />
            <PlantCare />
            <Blog />
        </main>
    )
}

export default Main