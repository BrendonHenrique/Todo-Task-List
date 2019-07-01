<template>
  <q-card class="bg-grey-2">

    <modal-header>Add task</modal-header>
    <form @submit.prevent="submitForm">

      <q-card-section>

        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" @clear="clearDueDate"></modal-due-date>
        <modal-due-time :dueTime.sync="taskToSubmit.dueTime" ></modal-due-time>

      </q-card-section>

      <modal-buttons></modal-buttons>

    </form>

    <pre>{{taskToSubmit}}</pre>

  </q-card>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDueDate () {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  },
  components: {
    'modal-header': require('components/Task/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Task/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Task/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Task/Modals/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Task/Modals/Shared/ModalButtons.vue').default

  }
}

</script>
