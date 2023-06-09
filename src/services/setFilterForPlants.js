export class Filter {
    constructor(plantsArr) {
        this.plantsArr = plantsArr;
    }

    setFilterByNew = (setFunc) => {
        const newArrivals = new Date(2023,5,17);

        const result = this.plantsArr.filter(item => {
            return item.date.getTime() < newArrivals.getTime();
        })

        setFunc([...result]);
    }

    setFilterBySale = (setFunc) => {
        const result = this.plantsArr.filter(item => {
            return item.sale;
        })

        setFunc([...result]);
    }

    returnAll = (setFunc) => {
        setFunc([...this.plantsArr])
    }

    setFilterBySmall = (setFunc) => {
        const result = this.plantsArr.filter(item => {
            return item.size === 'small';
        })

        setFunc([...result])
    }

    setFilterByMedium = (setFunc) => {
        const result = this.plantsArr.filter(item => {
            return item.size === 'medium';
        })

        setFunc([...result])
    }

    setFilterByLarge = (setFunc) => {
        const result = this.plantsArr.filter(item => {
            return item.size === 'large';
        })

        setFunc([...result])
    }
}