import Slider from "./Slider/Slider";
import Shop from "./Shop/Shop.jsx";
import PlantCare from "./PlantCare/PlantCare";
import Blog from "./Blog/Blog";


const Main = ({cartArr,setCartArr}) => {
    return(
        <main className="main">
            <Slider />
            <Shop 
                cartArr={cartArr}
                setCartArr={setCartArr}
            />
            <PlantCare />
            <Blog />
        </main>
    )
}

export default Main