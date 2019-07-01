<template>
  <div class="q-mt-lg">
    <list-header bgColor="bg-green-4">Task completed</list-header>
    <q-list separator bordered v-if="Object.keys(tasksCompleted).length > 0">
      <task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key">
      </task>
    </q-list>
  </div>
</template>
<script>
export default {
  props: ['tasksCompleted'],
  components: {
    'task': require('components/Task/Task.vue').default,
    'list-header': require('components/Shared/ListHeader.vue').default
  }
}
</script>
