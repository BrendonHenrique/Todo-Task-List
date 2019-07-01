<template>
  <q-page padding class="q-pa-md">

    <no-tasks v-if="!Object.keys(tasksTodo).length > 0"></no-tasks>

    <tasks-todo  v-else :tasksTodo="tasksTodo" />

    <tasks-completed v-if="Object.keys(tasksCompleted).length > 0" :tasksCompleted="tasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="showAddTask = true" round color="primary" icon="add">
      </q-btn>
    </div>

    <q-dialog v-model="showAddTask" transition-show="flip-down" transition-hide="flip-up" >
      <add-task @close="showAddTask = false" />
    </q-dialog>

  </q-page>
</template>

<style>
</style>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  data () {
    return {
      showAddTask: false
    }
  },
  mounted () {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  methods: {},
  components: {
    'add-task': require('components/Task/Modals/Addtask.vue').default,
    'tasks-todo': require('components/Task/TasksTodo.vue').default,
    'no-tasks': require('components/Task/NoTasks.vue').default,
    'tasks-completed': require('components/Task/TasksCompleted.vue').default
  },
  computed: {
    // 1 way to get state
    getTasks () {
      return this.$store.getters['tasks/tasksTodo']
    },
    // 2 way to get()
    ...mapGetters('tasks', ['foo', 'tasksTodo', 'tasksCompleted'])
  }
}
</script>

<style scoped>
</style>
