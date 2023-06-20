export class Plant {
    constructor(id, name, img, price, sale, discount, date, liked, discountPrice, added, cart) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price= price;
        this.sale = sale;
        this.discount = discount;
        this.date = date;
        this.liked = liked;
        this.discountPrice = discountPrice;
        this.added = added;
        this.cart = cart;
    }

    addToCart = () => {
        this.cart.cart.push(this);
        this.added = true;
    }

    removeFromCart = () => {
        this.cart.cart.splice(this.cart.cart.indexOf(this),1);
        this.added = false;
        return this.cart.cart
    }
}