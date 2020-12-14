<template>
  <div>
    <div id="show">
      <button class="show-btn" @click="showBox">点击弹出遮罩层</button>
    </div>
    <children :flag="isShow" />
  </div>
</template>

<script>
import children from './children'
export default {
    data() {
      return {
        isShow: false
      }
    },
    components: {
        children
    },
    methods: {
      showBox() {
        this.isShow = !this.isShow
        // this.$emit("change")
        
      }
    }
}
</script>

<style>
body {
  background: green;
}


</style>

