<template>
  <div class="home">
    <NavTab/>
    <div class="select">
      <select v-model="symbol" @change="onChangeSymbol">
        <option value="BTCUSDT">BTCUSDT</option>
        <option value="BNBBTC">BNBBTC</option>
        <option value="ETHBTC">ETHBTC</option>
        <option value="ETHUSDT">ETHUSDT</option>
        <option value="DOGEUSDT">DOGEUSDT</option>
        <option value="ETCUSDT">ETCUSDT</option>
      </select>
    </div>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
  import {bus} from '../main'

  export default {
    name: 'ChangeSymbol',
    components: {
      NavTab
    },
    data(){
      return {
        symbol: this.$store.getState('symbol')
      }
    },
    methods: {
      onChangeSymbol(){
        bus.$emit('changeSymbol', this.symbol)
      }
    }
  }
</script>

<style scoped>
  .select{
    display: flex;
    margin: 1rem;
  }
</style>