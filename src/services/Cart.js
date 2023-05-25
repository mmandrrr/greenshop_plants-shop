export class Cart {

    constructor() {
        this.cart = [];
    }

    clearCart = () => {
        this.cart.length = 0;
    }
    
    showCart = () => {
        console.log(this.cart);
    }
}