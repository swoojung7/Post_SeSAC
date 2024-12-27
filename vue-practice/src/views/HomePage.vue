<template>
    <div>
        <h1>Hello, {{ world }} !</h1>
        <input type="text" v-model="input1" />
        <button type="button" @click="setData">Change Text</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            world: "Post_SeSAC",
            input1: "Post_SeSAC"
        }
    },
    methods: {
        setData() {
            this.world = this.input1;
        }
    }
};
</script>