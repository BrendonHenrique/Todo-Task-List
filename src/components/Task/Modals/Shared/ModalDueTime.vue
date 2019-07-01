<template>

  <div class="row q-mb-sm">
    <q-input oulined label="Due time" :value="dueTime" @input="$emit('update:dueTime',$event)" class="col">
      <template v-slot:append>
        <q-icon v-if="dueTime" name="close" @click="$emit('update:duetime', '')"></q-icon>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy >
            <q-time class="bg-grey-2" :value="dueTime" @input="$emit('update:dueTime',$event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>

</template>

<script>
export default {
  props: ['dueTime']
}
</script>
