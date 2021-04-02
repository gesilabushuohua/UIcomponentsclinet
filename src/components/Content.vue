<template>
  <div class="content">
    <img :src="imgPath">
    {{ componentName }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { base } from '@/api/request';

@Options({
  props: {
    componentName: String
  }
})
export default class Content extends Vue {
  componentName!: string

  get imgPath(): string {
    return this.componentName && `${base}/file/source/${this.componentName}/main.jpg`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
