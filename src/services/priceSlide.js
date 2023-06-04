export class PriceSlide {
    
    priceGap = 300;

    setValue = (e,func) => {
        const minVal = +document.querySelector('.min').value;
        const maxVal = +document.querySelector('.max').value;

        if(maxVal - minVal < this.priceGap) {
            if(e.target.classList.contains('min')) {
                func(maxVal - this.priceGap);
            } else {
                func(minVal + this.priceGap)
            }
        } else {
            if(e.target.classList.contains('min')) {
                func(minVal);
            } else {
                func(maxVal)
            }
        }
    }

    getPercentMin = (value,max) => {
        return (value / max) * 100;
    }

    getPercentMax = (value,max) => {
        return 100 - (value / max) * 100;
    }
}