export class Filter {
    constructor(plantsArr,filteredArr) {
        this.plantsArr = plantsArr;
        this.filteredArr = filteredArr;
    }



    paintSwithcer = () => {
        if(document.querySelectorAll('.shop__switch-page')[0]) {
            document.querySelectorAll('.shop__switch-page').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.shop__switch-page')[0].classList.add('active');
        }
    }

    // Top Filter

    setFilterByNew = (setFunc) => {
        const newArrivals = new Date(2023,5,17);

        const result = this.plantsArr.filter(item => {
            return item.date.getTime() < newArrivals.getTime();
        })

        setFunc([...result]);
        
        this.paintSwithcer();
    }

    setFilterBySale = (setFunc) => {
        let result = [];
        
        result = this.plantsArr.filter(item => {
            return item.sale;
        })

        setFunc([...result]);

        this.paintSwithcer();
    }

    returnAll = (setFunc) => {
        setFunc([...this.plantsArr])

        this.paintSwithcer();
    }

    // Sizes Filter

    setBySizeFilter = (e,setFunc) => {
        let result = [];

        switch(e.target.dataset.size) {
            case 'small' :
                result = this.plantsArr.filter(item => {
                    return item.size === 'small';
                }) 
                break;
            case 'medium' :
                result = this.plantsArr.filter(item => {
                    return item.size === 'medium';
                }) 
                break;
            case 'large' :
                result = this.plantsArr.filter(item => {
                    return item.size === 'large';
                }) 
                break;
        }
        
        setFunc([...result]);
    }

    // Sorting

    setSort = (e,func) => {
        func(e.target.dataset.sort);
    }

    setSortByAlphabet = (e,setSort,setArr) => {
        this.setSort(e,setSort);

        const result = this.filteredArr.sort((a,b) => {
            return a.name > b.name ? 1 : -1;
        })

        setArr([...result]);

        this.paintSwithcer();
    }

    setSortByPrice = (e,setSort,setArr) => {
        this.setSort(e,setSort);
        this.filtered = true;

        const result = this.filteredArr.sort((a,b) => {
            return +a.price.split('$')[1] < +b.price.split('$')[1] ? 1 : -1;
        })

        setArr([...result]);

        this.paintSwithcer();
    }

    setSortByDate = (e,funcSort,sortDate) => {
        this.paintSwithcer();

        this.setSort(e,funcSort);

        const sortResult = this.filteredArr.sort((a,b) => {
            return a.date.getTime() > b.date.getTime() ? 1 : -1;
        })


        sortDate([...sortResult])
    }
}