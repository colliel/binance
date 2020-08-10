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
    <List :a="a" :b="b"/>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
  import List from '@/components/List'
  import {bus} from '../main'

  export default {
    name: 'ChangeSymbol',
    components: {
      NavTab, List
    },
    data(){
      return {
        symbol: this.$store.getState('symbol'),
        a: this.$store.getState('a'),
        b: this.$store.getState('b'),
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