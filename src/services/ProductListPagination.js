export class ProductListPagination {
    constructor(productsList) {
        this.productsList = productsList;
    }

    showNineProducts = (number) => {
        const showedList = [];
        for(let i = number * 9; i < (number * 9 + 9); i++) {
            if(this.productsList[i]) {
                showedList.push(this.productsList[i]);
            }
        }
        return showedList;
    }

    generateSwitcher = () => {
        const count = Math.ceil(this.productsList.length / 9);
        const switchId = []; 

        for(let i = 0; i < count; i++) {
            switchId.push(i);
        }

        return switchId;
    }
}