<template>

  <div class="row q-mb-sm">
    <q-input class="col" :rules="[val => !!val || 'Field is required']" ref="name" autofocus oulined
      :value="name" @input="$emit('update:name',$event)" label="Task name">
      <template v-slot:append>
        <q-icon v-if="name" name="close" @click="$emit('update:name','')"></q-icon>
        <q-icon name="list"></q-icon>
      </template>
    </q-input>
  </div>

</template>

<script>
export default {
  props: ['name']
}
</script>
