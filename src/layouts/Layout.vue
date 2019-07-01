<template>
  <q-layout view="hhh LpR fFf">

   <!-- header -->
    <q-header elevated  class="primary">
      <q-toolbar>
        <q-toolbar-title class="text-weight-thin">
          Garten's Todo app
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!--  -->

    <!-- footer -->
    <q-footer class="primary">
      <q-tabs>
        <q-route-tab
        v-for="nav in navs" :key="nav.label"
        :icon="nav.icon"
        :label="nav.label"
        :to="nav.to" />
      </q-tabs>
    </q-footer>
    <!--  -->

    <!-- side navbar -->
    <q-drawer v-model="leftDrawerOpen" bordered
    :breakpoint="767"
    :width="250"
     content-class="bg-grey-10"
     >
      <q-list dark>
        <q-item v-for="nav in navs"
        clickable exact
        class="text-grey-6"
        :to="nav.to"
        :key="nav.label">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <!--  -->

    <!-- page inside content -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!--  -->

  </q-layout>
</template>

<script>
import {
  openURL
} from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  methods: {
    openURL
  }
}

</script>

<style>
  @media screen and (min-width:768px){
    .q-footer{
      display:none;
    }
  }
  .q-router-link--exact-active{
    color:RoyalBlue !important;
  }
</style>
