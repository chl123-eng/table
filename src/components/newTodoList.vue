<template>
  <div>
    <div class="title1">任务计划列表</div>
    <div class="title2">添加任务：</div>
    <div class="input"><input type="text" placeholder="输入" v-model="msg" @keyup.enter="add()"></div>
    <div>
      <span class="tip">{{this.unfinish.length}}个任务未完成</span>
      <div class="btns" v-for="(item,index) in taskType" 
      :key="index" 
      @click="changeType(index)"
      :class="currentIndex == index ? 'btnActive': ''">
        <button class="btn">{{item.name}}</button> 
      </div>
    </div>
    <div class="title3">任务列表：</div>
    <div class="tasks">
      <div v-show="type === 'all'">
        <div v-for="(item,index) in all" :key="index" @change='change(index)'>
          <input type="checkbox" 
          :key="item.id" 
          v-model="item.checked"/>
          <span :class="{ 'isActive' : item.checked}">{{item.name}}</span>
          <button @click="remove(index)">删除</button>
        </div>
      </div>
      <div v-show="type === 'finished'">
        <div v-for="(item,index) in finished" :key="index" @change='change(index)'>
          <input type="checkbox" 
          :key="item.id" 
          v-model="item.checked"/>
          <span :class="{ 'isActive' : item.checked}">{{item.name}}</span>
          <button @click="remove(index)">删除</button>
        </div>
      </div>
      <div v-show="type === 'unfinish'">
        <div v-for="(item,index) in unfinish" :key="index" @change='change(index)'>
          <input type="checkbox" 
          :key="item.id" 
          v-model="item.checked"/>
          <span :class="{ 'isActive' : item.checked}">{{item.name}}</span>
          <button @click="remove(index)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      currentIndex: 0,
      taskType: [
        {
          type: "all",
          name: "所有任务"
        },
        {
          type: "finished",
          name: "完成的任务"
        },
        {
          type: "unfinish",
          name: "未完成任务"
        }
      ],
      type: "all",
      all: 
        [
          {
            id: 0,
            checked: false,
            name: "学习vue"
          },
          {
            id: 1,
            checked: false,
            name: "移动端"
          },
          {
            id: 2,
            checked: false,
            name: "西安一日游"
          }
        ],
      finished: [],
      unfinish: [
        {
          id: 0,
          checked: false,
          name: "学习vue"
        },
        {
          id: 1,
          checked: false,
          name: "移动端"
        },
        {
          id: 2,
          checked: false,
          name: "西安一日游"
        }
      ],
    };
  },
  mounted() {},
  methods: {
    add(){
      var newObj = {
        id: this.all.length + 1,
        checked: false,
        name: this.msg
      }
      this.all.push(newObj)
      this.unfinish.push(newObj)
    },
    changeType(index) {
      this.type = this.taskType[index].type
      this.currentIndex = index
    },
    change(index) {
      if(this.type == "all"){
        if(this.all[index].checked){
          this.finished.push(this.all[index])
          const id = this.all[index].id
          for(var i = 0; i < this.unfinish.length; i++){
            if(this.unfinish[i].id == id){
              this.unfinish.splice(i,1)
            }
          }
        }else{
          this.unfinish.push(this.all[index])
          const id = this.all[index].id
          for(var i = 0; i < this.finished.length; i++){
            if(this.finished[i].id == id){
              this.finished.splice(i,1)
            }
          }
        }
      }else if(this.type == "finished"){
        if(!this.finished[index].checked){
          this.unfinish.push(this.finished[index])
          this.finished.splice(index,1)
          
        }
      }
      else {
        if(this.unfinish[index].checked){
          const id = this.unfinish[index].id
          for(var i = 0; i < this.all.length; i++){
            if(this.all[i].id == id){
              this.all[i].checked = true
            }
          }
          this.finished.push(this.unfinish[index])
          this.unfinish.splice(index,1)
        }
      }
    },
    remove(index){
      if(this.type == "all" ){
        const id = this.all[index].id
        if(this.all[index].checked){
          for(var i = 0; i < this.finished.length; i++){
            if(this.finished[i].id == id){
              this.finished.splice(i,1)
            }
          }
        }
        else{
            for(var i = 0; i < this.unfinish.length; i++){
            if(this.unfinish[i].id == id){
              this.unfinish.splice(i,1)
            }
          }
        }
        this.all.splice(index,1)
      }else if(this.type == "finished"){
        const id = this.finished[index].id
        for(var i = 0; i < this.all.length; i++){
          if(this.all[i].id == id){
            this.all.splice(i,1)
          }
        }
        this.finished.splice(index,1)
      }else{
        const id = this.unfinish[index].id
        for(var i = 0; i < this.all.length; i++){
          if(this.all[i].id == id){
            this.all.splice(i,1)
          }
        }
        this.unfinish.splice(index,1)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
// @import "varibles"
.isActive {
  color: gray;
  text-decoration: line-through;
}
.btnActive {
  border: 3px solid pink
}
</style>
