import Vue from 'vue'

// this module can generate a unique id to each object inside this store
import { uid } from 'quasar'

// contains the data store

const state = {
  // FireBase Using

  tasks: {
    'ID1': {
      name: 'Develop',
      completed: false,
      dueDate: '18/12/2019',
      dueTime: '01:23'
    },
    'ID2': {
      name: 'Code',
      completed: false,
      dueDate: '11/12/2019',
      dueTime: '02:23'
    }
  },

  foo: 'vuex are awasome'

}

// here  data  can be changed, but this change  can't be asyncronous

const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask (state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

// here the data cam ne changed asyncrounsly
const actions = {
  // eslint-disable-next-line no-empty-pattern
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask ({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {

  tasksTodo: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach((key) => {
      let task = state.tasks[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })

    return tasks
  },
  tasksCompleted: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach((key) => {
      let task = state.tasks[key]
      if (task.completed) {
        tasks[key] = task
      }
    })

    return tasks
  },
  foo: (state) => {
    return state.foo
  }

}

export default {

  namespaced: true,
  // this allows me to create another one store modules
  state,
  mutations,
  actions,
  getters
}
