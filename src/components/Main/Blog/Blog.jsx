import Post from "./Post/Post";

import tips from '../../../assets/blog/cacctus-tips-min.png';
import topTen from '../../../assets/blog/top-ten-min.png';
import succTips from '../../../assets/blog/succulent-tips-min.png';
import bestPlants from '../../../assets/blog/best-plants-min.png';


const Blog = () => {
    return(
        <section id="blog" className="blog">
            <div className="blog__container container">
                <h2 className="blog__title">
                    Our Blog Posts
                </h2>
                <h3 className="blog__subtitle">
                    We are an online plant shop offering a wide range of cheap and trendy plants. 
                </h3>
                <div className="blog__wrapper">
                    <Post 
                        date='September 12 | Read in 6 minutes'
                        title='Cactus & Succulent Care Tips'
                        text='Cacti are succulents are easy care plants for any home or patio.'
                        img={tips}
                    />
                    <Post 
                        date='September 13  I Read in 2 minutes'
                        title='Top 10 Succulents for Your Home'
                        text='Best in hanging baskets. Prefers medium to high light.'
                        img={topTen}
                    />
                    <Post 
                        date='September 15  I Read in 3 minutes'
                        title='Cacti & Succulent Care Tips'
                        text='Cacti and succulents thrive in containers and because most are..'
                        img={succTips}
                    />
                    <Post 
                        date='September 15  I Read in 2 minutes'
                        title='Best Houseplants Room by Room'
                        text='The benefits of houseplants are endless. In addition to..'
                        img={bestPlants}
                    />
                </div>
            </div>
        </section>
    )
}

export default Blog