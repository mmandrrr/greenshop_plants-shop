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
        this.quantity = 0;
    }

    addToCart = () => {
        if(this.quantity === 0 && !Boolean(this.cart.filter(item => item.id === this.id).join())) {
            this.cart.push(this);
            this.added = true;
            this.increaseQuantity();
        } else {
            this.increaseQuantity();
        }
        return this.cart;
    }

    increaseQuantity = () => {
        this.quantity += 1;
        return this.quantity
    }

    decreaseQuantity = () => {
        this.quantity -= 1;
        return this.quantity
    }

    removeFromCart = () => {
        const index = this.cart.findIndex(item => item.id === this.id);
        this.cart.splice(index,1);
        this.added = false;
        return this.cart
    }

    updateCart = (cart) => {
        this.cart = cart;
    }
}