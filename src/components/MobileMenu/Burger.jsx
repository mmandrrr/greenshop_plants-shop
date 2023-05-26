

const Burger = ({openMobile}) => {
    return(
        <div onClick={openMobile} className="burger">
            <span className="burger__span"></span>
            <span className="burger__span"></span>
            <span className="burger__span"></span>
        </div>
    )
}

export default Burger