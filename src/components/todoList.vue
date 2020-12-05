<template>
  <div>
    <div class="header"><div class="wrap planList">任务计划列表</div></div>
    <div class="wrap addTask">添加任务:</div>
    <div class="wrap"><input class="inputTask" type="text" placeholder="输入"/></div>
    <div class="wrap">
        <span class="tip">2个任务未完成</span>
        <button class="btn" v-for="(item,index) in taskTarget" :key="index" @click="select()">{{item}}</button>
    </div>
    <div class="taskList wrap">任务列表:</div>
    <div class="wrap">
        <div class="task" :key='index' v-for="(item, index) in allTasks">
            <input type="checkbox" :key='item.k' v-model="item.k" @click="add(index)"/>
            <span :class="{taskActive: item.k}">{{ item.taskName }}</span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'todoList',
  components: {
    
  },
  data() {
    return{
        taskTarget: ["所有任务","未完成任务","完成的任务"],
        allTasks: [
            {
                k: false,
                taskName: "学习vue"
            },
            {
                k: false,
                taskName: "移动端"
            },
            {
                k: false,
                taskName: "西安一日游"
            }
            ],
        finished: [],
        noFinished: [],


    }
  },
  methods: {
        add(index) {
            this.allTasks[index].k = !this.allTasks[index].k;
            // var newObj = {
            //     k: "",
            //     taskName: ""
            // };
            // if(this.allTasks[index].k){
            //     newObj.k = true;
            //     newObj.taskName = this.allTasks[index].taskName
            //     this.finished.push(newObj);
            // }else{
            //     newObj.k = false;
            //     newObj.taskName = this.allTasks[index].taskName
            //     this.noFinished.push(newObj);
            // }

            // for(var i = 0 ;i < this.allTasks.length; i++){
            //     if(this.allTasks[i].k == false){
            //         newObj.k = false;
            //         newObj.taskName = this.allTasks[i].taskName
            //         this.noFinished.push(newObj);
            //         console.log(this.noFinished)
            //     }else{
            //         newObj.k = true;
            //         newObj.taskName = this.allTasks[i].taskName
            //         this.finished.push(newObj);
            //         console.log(this.finished)
            //     }

            // }
        },

        select() {
             var newObj = {
                k: "",
                taskName: ""
            };
            for(var i = 0 ;i < this.allTasks.length; i++){
                (function(index){
                    if(this.allTasks[index].k == false){
                        newObj.k = false;
                        newObj.taskName = this.allTasks[index].taskName
                        this.noFinished.push(newObj);
                    }
                    else{
                        newObj.k = true;
                        newObj.taskName = this.allTasks[index].taskName
                        this.finished.push(newObj);
                    }
                })(i)
            }
            console.log(this.finished)
            console.log(this.noFinished)
        }
        
    
  },

}
</script>

<style scoped>
.header {
    height: 50px;
    background: #cc5545;
}

.wrap {
    width: 1000px;
    margin: 20px auto
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

.inputTask{
    height: 30px;
    line-height: 30px;
    width:1000px
}

.tip {
    color: #cc5545;
}

.btn {
    float: right;
    height: 30px;
    line-height: 30px;
    border: 1px solid black;
    margin: 0 10px;
    border:none
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


</style>
