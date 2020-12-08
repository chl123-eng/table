<template>
  <div>
    <div class="header"><div class="wrap planList">任务计划列表</div></div>
    <div class="wrap addTask">添加任务:</div>
    <div class="wrap">
      <input
        class="inputTask"
        type="text"
        placeholder="输入"
        v-model="msg"
        @keyup.enter="enter(msg, all)"
      />
    </div>
    <div class="wrap taskName">
      <span class="tip">{{ unfinish.length }}个任务未完成</span>
      <div class="btns">
        <div
          class="btn"
          v-for="(item, index) in taskTarget"
          :key="index"
          :class="currentIndex === index ? 'taskTargetActie' : ''"
          @click="changeIndex(index)"
        >
          <button :key="item.k" @click="changeType(item.type)">{{ item.name }}</button>
        </div>
      </div>
    </div>
    <div class="taskList wrap">任务列表:</div>
    <div class="wrap">
      <!-- 谢树宏新增 -->
      <div v-show="type === 'all'">
        <div class="task" :key="index" v-for="(item, index) in all">
          <input
            type="checkbox"
            :key="item.checked"
            v-model="item.checked"
            @change="e => change(e, index)"
          />
          <span :class="{ taskActive: item.checked }">{{ item.name }}</span>
        </div>
      </div>
      <div v-show="type === 'finish'">
        <div class="task" :key="index" v-for="(item, index) in finish">
          <input type="checkbox" :key="item.checked" v-model="item.checked" @change="change" />
          <!-- 第一个问题 -->
          <span :class="{ taskActive: !item.checked }">{{ item.name }}</span>
        </div>
      </div>
      <div v-show="type === 'unfinish'">
        <div class="task" :key="index" v-for="(item, index) in unfinish">
          <input type="checkbox" :key="item.checked" v-model="item.checked" @change="change" />
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
      msg: '',
      currentIndex: 0,
      currentK: 0,
      type: 'all',
      ids: [],
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
        name: '',
        checked: '',
      },
      all: [
        {
          id: 0,
          name: '学习vue',
          checked: false,
        },
        {
          id: 1,
          name: '移动端',
          checked: false,
        },
        {
          id: 2,
          name: '西安一日游',
          checked: false,
        },
      ],
      finish: [],
      unfinish: [
        {
          id: 0,
          name: '学习vue',
          checked: false,
        },
        {
          id: 1,
          name: '移动端',
          checked: false,
        },
        {
          id: 2,
          name: '西安一日游',
          checked: false,
        },
      ],
    };
  },
  methods: {
    changeType(type) {
      this.type = type;
    },
    changeIndex(index) {
      this.currentIndex = index;
    },

    enter() {
      const item = {
        id: this.all.length + 1,
        checked: false,
        name: this.msg,
      };
      this.all.push(item);
      this.unfinish.push(item);
    },

    change(e, index) {
      if (e.target.checked) {
        if (this.type == 'all') {
          this.finish.push(this.all[index]);
          const id = this.all[index].id;
          let cindex;
          const arr = this.unfinish.forEach((item, index) => {
            if (item.id === id) {
              //cindex = index;
              this.unfinish.splice(index, 1);
            }
          });
          // this.unfinish.splice(cindex, 1);
        } else if (this.type == 'finish') {

        } else {

        }
      }
      else {
        console.log(e.target.checked)
          if (this.type == 'all') {
            this.unfinish.push(this.all[index]);
            const id = this.all[index].id;
            //let cindex;
            const arr = this.finish.forEach((item, index) => {
              if (item.id === id) {
                //cindex = index;
                this.finish.splice(index, 1);
              }
            });
            //this.unfinish.splice(index, 1);
          }
          else if (this.type == 'finish') {
            console.log(this.finish[index])
            this.unfinish.push(this.finish[index]);
            this.finish.splice(index, 1);
            //const id = this.finish[index].id;
            //let cindex;
            // const arr = this.finish.forEach((item, index) => {
            //   if (item.id === id) {
            //     //cindex = index;
            //     this.finish.splice(index, 1);
            //   }
            // });
            //this.unfinish.splice(index, 1);
          }
          else {

          }
      }
    },
  },
};
</script>

<style scoped>
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
.btns {
  display: flex;
  justify-content: space-between;
}
.btn {
  float: right;
  height: 30px;
  line-height: 30px;
  border: 1px solid black;
  margin: 0 10px;
  border: none;
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
  border: 2px solid pink;
}
</style>
