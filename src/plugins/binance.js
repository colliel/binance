const binance = {
    install (Vue) {
        Vue.prototype.$getOrderBook = function (symbol) {
            fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`)
                .then(response => response.json())
                .then(json => {
                    this.data = json
                    this.loading = false
                })
        }
    }
}

export default binance