<script setup lang="ts">
import { provide, ref } from 'vue'
import { darkTheme, NConfigProvider, NFlex } from 'naive-ui'
import { type RubikCubeItem, rubikCubeData } from '@/utils/index.ts'
import ControlPanel from '@/components/ControlPanel.vue'
import ViewPanel from '@/components/ViewPanel.vue'

provide('data', ref<RubikCubeItem[]>(rubikCubeData))
provide('state', ref<number[]>(rubikCubeData.map((_, i) => i)))
</script>

<template>
  <n-config-provider class="app-container" :theme="darkTheme">
    <n-flex class="app-content">
      <ControlPanel />
      <ViewPanel />
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
