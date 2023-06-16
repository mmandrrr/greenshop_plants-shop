

const Post = ({img,title,text}) => {
    return(
        <div className="footer__post">
            <img src={img} alt="Post" />
            <h3 className="footer__title">
                {title}
            </h3>
            <p className="footer__text fz_14px-reg">
                {text}
            </p>
        </div>
    )
}

export default Post