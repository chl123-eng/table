import Vue from 'vue'
import Router from 'vue-router'
// import table from '@/components/table'
// import box from '@/components/box'
// import third from '@/components/third'
// import four from '@/components/four'
// import todoList from '@/components/todoList'
//import newTodoList from '@/components/newTodoList'
import father from '@/components/father'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'newTodoList',
    //   component: newTodoList
    // },
    {
      path: '/',
      name: 'father',
      component: father
    },
    // {
    //   path: '/third',
    //   name: 'third',
    //   component: third
    // },
    // {
    //   path: '/four',
    //   name: 'four',
    //   component: four
    // },
    // {
    //   path: '/todoList',
    //   name: 'todoList',
    //   component: todoList
    // }
  ]
})
