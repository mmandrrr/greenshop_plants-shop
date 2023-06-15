import Slider from "./Slider/Slider";
import Shop from "./Shop/Shop.jsx";
import PlantCare from "./PlantCare/PlantCare";
import Blog from "./Blog/Blog";


const Main = () => {
    return(
        <main className="main">
            <Slider />
            <Shop />
            <PlantCare />
            <Blog />
        </main>
    )
}

export default Main