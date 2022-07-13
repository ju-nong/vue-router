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
    padding-top: 30px;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    > a {
        margin: 10px;
    }
}
</style>
