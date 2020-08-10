export default {
    install (Vue, options) {
        Vue.prototype.$store =  {
            state: {
                symbol: "BTCUSDT"
            },
            getState(name) {
                return this.state[name]
            },
            setState(name, value) {
                this.state[name] = value;
            },
            clearState(name) {
                this.state[name] = "";
            }
        }
    }
}