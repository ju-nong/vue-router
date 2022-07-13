<template>
    <footer>
        <router-link to="/first">1</router-link>
        <router-link to="/second">2</router-link>
        <router-link to="/third">3</router-link>
        <router-link to="/fourth">4</router-link>
    </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style lang="scss" scoped>
footer {
    width: 900px;
    bottom: 50vh;
    text-align: center;
    position: fixed;
    > a {
        margin: 10px;
    }
}
</style>
