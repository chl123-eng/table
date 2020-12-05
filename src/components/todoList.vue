<template>
  <div>
    <div class="header"><div class="wrap planList">任务计划列表</div></div>
    <div class="wrap addTask">添加任务:</div>
    <div class="wrap"><input class="inputTask" type="text" placeholder="输入"/></div>
    <div class="wrap">
        <span class="tip">2个任务未完成</span>
        <div class="btn" v-for="(item,index) in taskTarget" :key="index">
            <button :key="item.k" @click="showK(index)">{{item.name}}</button>
        </div>
    </div>
    <div class="taskList wrap">任务列表:</div>
    <div class="wrap">
        <div class="task" :key='index' v-for="(item, index) in newTask.objs">
            <input type="checkbox" :key='item.b' v-model="item.b" @click="add(index)"/>
            <span :class="{taskActive: item.b}">{{ item.taskName }}</span>
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
        currentK : 0,
        taskTarget: [
            {
                k: 1,
                name: "所有任务"
            },
            {
                k: 2,
                name: "未完成任务"
            },
            {
                k: 3,
                name: "已完成任务"
            },

        ],
        newTask: {
            k: "",
            objs: [
                // {
                //     b: "",
                //     taskName: ""
                // }
            ]
        },
        tasks: [
                {
                    k: 1,
                    objs: [
                            {
                                b: false,
                                taskName: "学习vue"
                            },
                            {
                                b: false,
                                taskName: "移动端"
                            },
                            {
                                b: false,
                                taskName: "西安一日游"
                            }
                    ]
                },
            {
                
                k: 2,
                objs: [
                        {
                            b: false,
                            taskName: "学习vue"
                        },
                        {
                            b: false,
                            taskName: "移动端"
                        }
                ]
        
            },
            {
                k: 3,
                objs: [
                    {
                        b: false,
                        taskName: "学习vue"
                    }
                ]
            }
        ]
    }
  },
  methods: {
        add(index) {
            this.allTasks[index].k = !this.allTasks[index].k;
        },

        // select() {
        //      var newObj = {
        //         k: "",
        //         taskName: ""
        //     };
        //     for(var i = 0 ;i < this.allTasks.length; i++){
        //         (function(index){
        //             if(this.allTasks[index].k == false){
        //                 newObj.k = false;
        //                 newObj.taskName = this.allTasks[index].taskName
        //                 this.noFinished.push(newObj);
        //             }
        //             else{
        //                 newObj.k = true;
        //                 newObj.taskName = this.allTasks[index].taskName
        //                 this.finished.push(newObj);
        //             }
        //         })(i)
        //     }
        //     console.log(this.finished)
        //     console.log(this.noFinished)
        // }
        showK(index){
            this.newTask.k = this.taskTarget[index].k
            // console.log(this.newTask.k)
            for(var i = 0 ;i < this.tasks.length; i++){
                if(this.newTask.k == this.tasks[i].k){
                    this.newTask.objs = this.tasks[i].objs
                }
            }
            console.log(this.newTask)
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
