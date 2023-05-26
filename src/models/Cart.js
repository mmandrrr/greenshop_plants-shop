export class Cart {

    constructor() {
        this.cart = [];
        this.empty = true;
    }

    clearCart = () => {
        this.cart.length = 0;
        this.empty = true;
    }

    setEmpty = () => {
        this.empty = false;
    }
    
    showCart = () => {
        console.log(this.cart);
    }
}