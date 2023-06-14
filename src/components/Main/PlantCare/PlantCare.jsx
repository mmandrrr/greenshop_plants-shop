import styling from '../../../assets/plant-care/styling-min.png';
import summer from '../../../assets/plant-care/summer-min.png';
import Post from './Post/Post';

const PlantCare = () => {
    return(
        <section className="care">
            <div className="care__container container">
                <Post 
                    img={summer}
                    title='Summer cactus & succulents'
                    text='We are an online plant shop offering a wide range of cheap and trendy plants'
                />
                <Post 
                    img={styling}
                    title='Styling Trends & much more'
                    text='We are an online plant shop offering a wide range of cheap and trendy plants'
                />
            </div>
        </section>
    )
}

export default PlantCare