<template>
    <footer class="tc fwb">
        <router-link to="/A">1</router-link>
        <router-link to="/B">2</router-link>
        <router-link to="/C">3</router-link>
        <router-link to="/D">4</router-link>
    </footer>
</template>

<script>
export default { name: "TheFooter" };
</script>

<style lang="scss" scoped>
footer {
    padding-top: 30px;
    font-size: 26px;
    > a {
        margin: 10px;
    }
}
</style>
