<script setup lang="ts">
import { type Ref, inject } from 'vue'
import { type RubikCubeData, type RubikCubeState } from '@/utils/index.ts'

const data = inject<Ref<RubikCubeData>>('data') as Ref<RubikCubeData>
const state = inject<Ref<RubikCubeState>>('state') as Ref<RubikCubeState>
</script>

<template>
  <div class="ring-hints">
    ring-hints
  </div>
</template>

<style scoped>
.ring-hints {
  background-color: blue;
  width: 500px;
  flex-grow: 1;
}
</style>
