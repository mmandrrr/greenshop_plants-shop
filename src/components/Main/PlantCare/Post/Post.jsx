import arrowRight from '../../../../assets/plant-care/arrow-right.svg';

const Post = ({img,title,text}) => {
    return(
        <div className="care__post">
            <img src={img} alt="Plant" className="care__image" />
            <h2 className="care__title">{title}</h2>
            <p className="care__description fz_14px-reg">
                {text}
            </p>
            <button className="bg_green">Find More <img src={arrowRight} alt="Arrow" /></button>
        </div>
    )
}

export default Post