<template>
  <div>
      <!-- <input type="text" v-model="msg" @keyup.enter="enter()" placeholder="输入"/> -->
      <!-- <p v-for="(item,index) in arr" :key="index">{{ item }}</p> -->
      
      <div>
        <input type="text" v-model="msg" @keyup.enter="enter(objs,msg)" placeholder="输入"/>
        <div :key='index' v-for="(item, index) in objs">
          <input type="checkbox" :key='item.k' @click="clickCB(index)" :checked="item.k"/>
          <span :class="{ gray: item.k }">{{ item.taskName }}</span>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'third',
  components: {
    
  },
  methods: {
    clickCB(index) {
      this.objs[index].k = !this.objs[index].k;
    },

    enter(objs,msg) {
      var newObj = {
        k: false,
        taskName: msg
      }
      objs.push(newObj);
    }

  },

  data() {
      return {
        // arr: [1,2,3],
        objs: [
          {
            k: false,
            taskName: "学习vue"
          },
          {
            k: false,
            taskName: "不学习vue"
          }
        ],
        msg: ""
      }
  }
  
}
</script>

<style scoped>

.gray{
  color: gray;
}
</style>
