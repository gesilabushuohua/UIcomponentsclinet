<template>
  <div class="main">
    <div class="top">
      <ul class="nav" @click="handleTypeClick">
        <li
          class="item"
          v-for="item in componentTypes"
          :key="item"
          :data-val="item"
          :class="{ actived: item === curType }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="left">
      <ul class="side" @click="handleComponentClick">
        <li
          class="item"
          v-for="item in components"
          :key="item"
          :data-val="item"
          :class="{ actived: item === curComponent }"
        >
          {{ item }}
        </li>
        <li v-show="isNotComponent">请先上传组件</li>
      </ul>
    </div>
    <div class="right">
      <Content :componentName="this.curComponentContent()" />
    </div>
  </div>
</template>

<script lang="ts">
import '@/assets/css/layout.scss';
import { Options, Vue } from 'vue-class-component';
import Content from '@/components/Content.vue';
import { fileListRequest } from '@/api/request';

@Options({
  components: {
    Content,
  },
})
export default class MainLayout extends Vue {
  // data
  private componentTypes: Array<string> = ['React', 'Vue', 'HTML'];
  private curType: string = this.componentTypes[0];
  private components: Array<string> = [];
  private curComponent: string = '';

  // 计算属性
  get isNotComponent(): boolean {
    return !this.components.length || this.components.length === 0;
  }

  curComponentContent(): string {
    return this.curType && this.curComponent 
    ? `${this.curType}/${this.curComponent}`.toLowerCase()
    : '';
  }

  // 声明钩子函数
  created() {
    this.getComponents();
  }

  getComponents() {
    const type = this.curType.toLowerCase();
    this.curComponent = '';
    fileListRequest(type).then((res) => {
      const { data } = res;
      this.components = [...data];
      data.length > 0 && (this.curComponent = this.components[0]);
    });
  }

  handleTypeClick(event: any): void {
    const val = event.target.dataset.val;
    if(val) {
      this.curType = val
      this.getComponents();
    };
  }

  handleComponentClick(event: any): void {
    const val = event.target.dataset.val;
    val && (this.curComponent = val);
  } 
}
</script>
