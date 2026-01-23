<script setup lang="ts">
import { type Ref, inject } from 'vue'
import { type RubikCubeItem } from '@/utils/index.ts'
import RubikCubeBlock from '@/components/RubikCubeBlock.vue'

const data = inject<Ref<RubikCubeItem[]>>('data') as Ref<RubikCubeItem[]>
</script>

<template>
  <div class="view-panel">
    <div class="rubik-cube">
      <RubikCubeBlock v-for="item in data" :info="item" :key="item.label" />
    </div>
  </div>
</template>

<style scoped>
.view-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.rubik-cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(75deg) rotateZ(20deg);
}
</style>
