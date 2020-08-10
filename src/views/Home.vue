<template>
  <div class="home">
    <NavTab/>
    <Table/>
  </div>
</template>

<script>
  import Table from '@/components/Table'
  import NavTab from '@/components/NavTab'

  export default {
    name: 'Home',
    components: {
      Table, NavTab
    }
  }
</script>

<style>
  .home {
    height: 100vh;
  }
</style>
