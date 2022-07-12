<template>
    <header>
        B
        <button @click="$router.go(-1)">뒤로가기</button>
    </header>
</template>

<script>
export default {
    name: "Header-B",
};
</script>

<style scoped>
header {
    background-color: #0040ff;
}
</style>
