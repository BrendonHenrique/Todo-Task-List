<template>
  <q-item clickable :class=" task.completed ? 'bg-teal-2' : 'bg-blue-grey-1'"
    @click="updateTask({id: id, updates: {completed: !task.completed}})">

    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough' : task.completed}">
        {{task.name}}
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <q-icon name="event" class="q-mr-xs" size="25px"></q-icon>
        <div class="column justify-center">
          <q-item-label class="row justify-end" caption>{{task.dueDate}}
          </q-item-label>
          <q-item-label class="row justify-end" caption>{{task.dueTime}}
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn flat round dense color="secundary" class="bg-blue-grey-10" icon="edit"
        @click.stop="showEditTask = true">
        </q-btn>
        <q-btn flat round dense color="red-5" class="bg-blue-grey-10" icon="delete"
        @click.stop="pronpToDelete(id)">
        </q-btn>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask" transition-show="flip-down" transition-hide="flip-up" >
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>

  </q-item>
</template>

<script>

import {
  mapActions
} from 'vuex'

export default {
  props: [
    'task', 'id'
  ],
  data () {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    pronpToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    'edit-task': require('components/Task/Modals/Edittask.vue').default
  }
}

</script>

<style>

</style>
