<script setup lang="ts">
import { type Ref, inject } from 'vue'
import { type RubikCubeData, type RubikCubeState } from '@/utils/index.ts'

const data = inject<Ref<RubikCubeData>>('data') as Ref<RubikCubeData>
const state = inject<Ref<RubikCubeState>>('state') as Ref<RubikCubeState>

const facets = ['left', 'right', 'front', 'back', 'up', 'down']
const colors = ['coral', 'red', 'blue', 'lime', 'yellow', 'white']
</script>

<template>
  <div class="plain-hints">
    <div v-for="facet in facets" :key="facet" class="plain-facet" :style="{ gridArea: facet }">
      <div v-for="i in 9" :key="facet + i" class="plain-cell"></div>
    </div>
  </div>
</template>

<style scoped>
.plain-hints {
  margin: 0 auto;
  padding: 3em 0;
  display: grid;
  grid-template-columns: repeat(3, 98px);
  grid-template-rows: repeat(4, 98px);
  grid-template-areas:
    ".     up   ."
    "left front right"
    ".    down  ."
    ".    back  .";
}
.plain-facet {
  box-sizing: border-box;
  border: 2px solid #181818;
  background-color: #181818;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, 30px);
  grid-template-rows: repeat(3, 30px);
}
.plain-cell {
  background-color: yellow;
}
</style>
