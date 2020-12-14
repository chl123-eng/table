<template>
  <div>
    <input type="text" v-model="todoValue"/>
    <button :click="handleBtnClick">提交</button>
    <ul>
      <children :key="index"
              :content = "item"
              :index = "index"
              v-for="(item,index) in list"
              @delete="handleItemDelete">
      </children>
    </ul>
  </div>
</template>

<script>
import children from './children'
export default {
    data() {
      return {
        list: [],
        todoValue: ''
      }
    },
    components: {
        children
    },
    methods: {
       handleBtnClick() {
         this.list.push(this.todoValue)
         this.todoValue = ""
       },
       handleItemDelete() {
         this.list.splice(index,1);
       }
    }
}
</script>

