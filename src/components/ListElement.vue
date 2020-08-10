<template>
    <li>
        {{i+1}}. {{row}}
    </li>
</template>

<script>
    export default {
        props: ['row', 'i']
    }
</script>

<style>
    li {
        list-style: none;
        display: flex;
        text-align: start;
        margin:0;
        padding:0;
    }
</style>