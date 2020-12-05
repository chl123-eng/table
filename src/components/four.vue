<template>
  <div>
      <div class="nav">
          <div class="items">
            <div class="item" 
            v-for="(item, index) in items" 
            :key="index"
            @click="slider(index)"
            :class="currentIndex === index ? 'active' : ''"
            >{{item.msg}}</div>
          </div>
          <div class="line"></div>
          <div 
            class="show"
            v-for="(item, index) in items" 
            :key="index"
            v-show="index === currentIndex"
          >{{item.msg}}</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'four',
  components: {
    
  },
  methods: {
      slider(index) {
      const arr = document.querySelectorAll('.item')
      const line = document.querySelector('.line')
      var items_width = 0;
      items_width = arr[index].offsetWidth;           
      line.style.width = items_width + "px";
      line.style.left = arr[index].offsetLeft + "px";

      this.currentIndex = index;

    },
    // ifFun(items,flag){
    //     if()
    // },

  },
  data() {
      return {
        //   activeClass: "active",
        items: [
            {msg: "写病历", id: "0"},
            {msg: "做检查", id: "1"},
            {msg: "检验", id: "2"},
            {msg: "西药", id: "3"},
            {msg: "中药", id: "4"},
            {msg: "治疗", id:"5"},
            {msg: "做手术",id: "6"}
        ],
        currentIndex: 0,
        
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
    height: 100px;
    border: 1px solid #ccc;
    display: flex;
}


.nav .items {
    position: absolute;
    display: flex;
    width: 1000px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid black;
}

.nav .items .item {
  font-size: 20px;
  padding: 0 30px;
}

.nav .line {
    position: absolute;
    top:50px;
    width: 100px;
    height: 3px;
    background: green;
    transition: all 0.2s;
}

.nav .show {
    position: absolute;
    top: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    padding: 0 30px;
    color: green;
}

.active{
    color: green
}

</style>