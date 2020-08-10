<template>
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/changeSymbol">ChangeSymbol</router-link>
        </li>
    </ul>
</template>

<style scoped>
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0 1rem;
    }
</style>