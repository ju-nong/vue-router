<template>
    <header>
        B
        <button class="fwb" @click="$router.go(-1)">&lt;</button>
    </header>
</template>

<script>
export default {
    name: "HeaderB",
};
</script>

<style lang="scss" scoped>
header {
    background-color: $bl;
    button {
        position: absolute;
        background-color: $tr;
        color: $w;
        font-size: 100px;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
