<template>
  <div>
    <div class="header"><div class="wrap planList">任务计划列表</div></div>
    <div class="wrap addTask">添加任务:</div>
    <div class="wrap">
      <input class="inputTask" type="text" placeholder="输入" v-model="msg" @keyup.enter="enter(msg, all)"/>
    </div>
    <div class="wrap taskName">
      <span class="tip">2个任务未完成</span>
      <div class="btns">
        <div class="btn" v-for="(item, index) in taskTarget" :key="index" @click="changeIndex(index)" :class="currentIndex === index ? 'taskTargetActie': ''"><button :key="item.k"  @click="changeType(item.type)">{{ item.name }}</button></div>
      </div>
    </div>
    <div class="taskList wrap">任务列表:</div>
    <div class="wrap">
      <!-- 谢树宏新增 -->
      <div v-show="type === 'all'">
        <div class="task" :key="index" v-for="(item, index) in all">
          <input type="checkbox" :key="item.checked" v-model="item.checked" @click="allAdd(index)" />
          <span :class="{ taskActive: item.checked }">{{ item.name }}</span>
        </div>
      </div>
      <div v-show="type === 'finish'">
        <div class="task" :key="index" v-for="(item, index) in finish">
          <input type="checkbox" :key="item.checked" v-model="!item.checked" @click="fAdd(index)"/>
<!-- 第一个问题 -->
          <span :class="{ taskActive: !item.checked }">{{ item.name }}</span>
        </div>
      </div>
      <div v-show="type === 'unfinish'">
        <div class="task" :key="index" v-for="(item, index) in unfinish">
          <input type="checkbox" :key="item.checked" v-model="item.checked" @click="ufAdd(index)"/>
          <span :class="{ taskActive: item.checked }">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todoList',
  components: {},
  data() {
    return {
      currentK: 0,
      currentIndex: 0,
      type: 'all',
      taskTarget: [
        {
          type: 'all',
          k: 1,
          name: '所有任务',
        },
        {
          type: 'unfinish',
          k: 2,
          name: '未完成任务',
        },
        {
          type: 'finish',
          k: 3,
          name: '已完成任务',
        },
      ],
      
      newObj: {
        name: "",
        checked: ""
      },
      
      all: [
        {
          name: '学习vue',
          checked: false,
        },
        {
          name: '移动端',
          checked: false,
        },
        {
          name: '西安一日游',
          checked: false,
        }
      ],
      finish: [],
      unfinish: [],
    };
  },
  methods: {
    changeType(type) {
      this.type = type;
      this.currentIndex = index 
      console.log(this.currentIndex)
    },
    changeIndex(index) {
      this.currentIndex = index
    },

    allAdd(index) {
      this.all[index].k = !this.all[index].k;
      if(this.all[index].k){
        this.finish.push(this.all[index])
      }
      for(var i = 0;i < this.all.length; i++){
        if(!this.all[i].k){
          this.unfinish.push(this.all[i])
        }
      }
    },
    fAdd(index){
      this.finish[index].k = !this.finish[index].k;
      if(!this.finish[index].k){
        this.unfinish.push(this.finish[index])
      }
    },
    ufAdd(index){
      this.unfinish[index].k = !this.unfinish[index].k;
      if(this.unfinish[index].k){
        this.finish.push(this.unfinish[index])
      }
    },
    enter(msg,all){
      this.newObj.checked = false;
      this.newObj.name = msg;
      this.all.push(this.newObj)
      this.unfinish.push(this.newObj)
    }
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.header {
  height: 50px;
  background: #cc5545;
}
.wrap {
  width: 1000px;
  margin: 20px auto;
}
.header .planList {
  color: #fff;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
}
.addTask {
  font: 18px bold;
}
.inputTask {
  height: 30px;
  line-height: 30px;
  width: 1000px;
}
.tip {
  color: #cc5545;
}

.taskName {
  display: flex;
  justify-content: space-between;
}

.btns{
  display: flex;
  justify-content: space-between;
}
.btn {
  /* float: right; */
  height: 30px;
  line-height: 30px;
  margin: 0 10px;
}
.taskList {
  font: 18px bold;
}
.task {
  border: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
}
.taskActive {
  text-decoration: line-through;
  color: gray;
}

.taskTargetActie {
  border:2px solid pink;
}
</style>