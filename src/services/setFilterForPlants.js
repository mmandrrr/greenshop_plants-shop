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
}