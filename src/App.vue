<script setup lang="ts">
import { provide, ref } from 'vue'
import { darkTheme, NConfigProvider, NFlex } from 'naive-ui'
import { type RubikCubeData, type RubikCubeState, rubikCubeData } from '@/utils/index.ts'
import ControlPanel from '@/components/ControlPanel.vue'
import ViewPanel from '@/components/ViewPanel.vue'
import PlainHints from './components/PlainHints.vue'
import RingHints from './components/RingHints.vue'

provide('data', ref<RubikCubeData>(rubikCubeData))
provide('state', ref<RubikCubeState>(rubikCubeData.map((_, i) => i) as RubikCubeState))
</script>

<template>
  <n-config-provider class="app-container" :theme="darkTheme">
    <n-flex class="app-content">
      <ControlPanel />
      <ViewPanel />
      <n-flex vertical class="hints-panel">
        <PlainHints />
        <RingHints />
      </n-flex>
    </n-flex>
  </n-config-provider>
</template>

<style scoped>
.app-container {
  height: 100vh;
  flex-grow: 1;
}
.app-content {
  height: 100vh;
}
</style>
