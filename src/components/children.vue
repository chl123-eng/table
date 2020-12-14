<template>
    <div>
        <li @click="handleItemClick">{{content}}</li>
    </div>
</template>

<script>
export default {
    name: 'children',
    props: ["content","index"],
    methods: {
        handleItemClick() {
            this.$emit("delete",this.index);
        }
    }
};
</script>
