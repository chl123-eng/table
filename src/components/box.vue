<template>
  <div>
    <!-- <div v-bind:style="[obj1, obj2]">11111111</div> -->
    <!-- <div :class="[activeClass1,activeClass2]"></div>
    <button class="btn" @click="change()">快点一下</button> -->
    

    <!-- <p @click="fullName">111</p> -->
    <!-- <p>{{obj1.a}}</p>
    <p>{{obj2.b}}</p>
    <p>{{obj2.c}}</p> -->

    <p v-for="(item,index) in newVal" :key='index' @click="change(index)">{{newVal[index].k}}</p>
  </div>
</template>

<script>

export default {
  name: 'class_styles',
  components: {
    
  },
  data() {
    return{
      newVal:[
        {
          k: false
        }
      ]
    }
  },
  methods: {
    change(index) {
     this.newVal[index].k = !this.newVal[index].k
    }
  },
  watch: {
    newVal: {
      handler(val, oldVal){
        console.log(this.newVal)
      },
      deep: true
    }
  }
}
</script>

<style scoped>




</style>
