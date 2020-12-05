<template>
  <div class="nav">
      <router-link 
        to="/" 
        tag="div" 
        :key="index" 
        v-for="(item, index) in items"
        @click.native="slider(index)"
        :class="currIndex === index ? 'items active' : 'items'"
      >{{item.msg}}</router-link>
    <div class="line"></div>
  </div>
</template>

<script>

export default {
  name: 'router-link',
  components: {
    
  },
  methods: {
    first(index) {
      this.currIndex = index
    },
    slider(index) {
      const arr = document.querySelectorAll('.items')
      const line = document.querySelector('.line')
      var items_width = 0;
      items_width = arr[index].offsetWidth;           
      line.style.width = items_width + "px";
      line.style.left = arr[index].offsetLeft + "px";

 
    }
  
  },
  created() {

  },
  mounted() {
  },
  data() {
    return {
      items: [
        {msg: "写病历"},
        {msg: "做检查"},
        {msg: "检验"},
        {msg: "西药"},
        {msg: "中药"},
        {msg: "治疗"},
        {msg: "做手术"}
      ],
      currIndex: 0
    }
  }
}

</script>

<style scoped>
 *{
    margin :0;
    padding: 0;
}

.nav {
    position: relative;
    margin: 50px auto;
    width: 1000px;
    height: 50px;
    line-height:50px;
    border: 1px solid #ccc;
    display: flex;
}


.nav .items {
  font-size: 20px;
  color: black;
  padding: 0 30px;
}

.nav .items.active {
  font-size: 20px;
  padding: 0 30px;
  color: green;
}


.nav .line {
    position: absolute;
    top:50px;
    width: 100px;
    height: 3px;
    background: green;
    transition: all 0.2s;
}

/* .router-link-active {
  color: green;
} */





</style>
