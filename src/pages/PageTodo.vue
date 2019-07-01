<template>
  <q-page padding class="q-pa-md">

    <q-list separator bordered v-if="Object.keys(tasks).length > 0">
      <task v-for="(task, key) in getTasks" :key="key" :task="task" :id="key">
      </task>
    </q-list>

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
  methods: {},
  components: {
    'task': require('components/Task/Task.vue').default,
    'add-task': require('components/Task/Modals/Addtask.vue').default
  },
  computed: {
    // 1 way to get state
    getTasks () {
      return this.$store.getters['tasks/tasks']
    },
    // 2 way to get()
    ...mapGetters('tasks', ['foo', 'tasks'])
  }
}
</script>

<style scoped>
</style>
