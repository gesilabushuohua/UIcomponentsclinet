<template>
  <MainLayout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MainLayout from '@/layout/MainLayout.vue'

@Options({
  components: {
    MainLayout
  }
})
export default class App extends Vue {}
</script>
