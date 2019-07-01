<template>
  <div class="row q-mb-sm">
    <q-input oulined label="Due date" :value="dueDate" @input="$emit('update:dueDate', $event)" class="col">
      <template v-slot:append>
        <q-icon v-if="dueDate" name="close" @click="$emit('clear')"></q-icon>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy >
            <q-date class="bg-grey-2" :value="dueDate"
            @input="$emit('update:dueDate', $event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueDate']

}
</script>
