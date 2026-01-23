<script setup lang="ts">
import { type Ref, inject } from 'vue'
import { NButton, NFlex, NH1, NH3 } from 'naive-ui'
import { type Action, type RubikCubeItem, actions } from '@/utils/index.ts'

const data = inject<Ref<RubikCubeItem[]>>('data') as Ref<RubikCubeItem[]>
const state = inject<Ref<number[]>>('state') as Ref<number[]>

const handleAction = (action: Action) => {
  console.log(action)
  state.value = actions[action](data.value, state.value)
}
</script>

<template>
  <n-flex vertical class="control-panel">
    <n-h1>Control Panel</n-h1>

    <n-h3>Commands</n-h3>
    <n-button type="primary" @click="handleAction('upTurnLeft')">U</n-button>
    <n-button type="primary" @click="handleAction('upTurnRight')">U'</n-button>
    <n-button type="primary" @click="handleAction('frontTurnCW')">F</n-button>
    <n-button type="primary" @click="handleAction('frontTurnCCW')">F'</n-button>
    <n-button type="primary" @click="handleAction('leftTurnDown')">L</n-button>
    <n-button type="primary" @click="handleAction('leftTurnUp')">L'</n-button>
    <n-button type="primary" @click="handleAction('rightTurnUp')">R</n-button>
    <n-button type="primary" @click="handleAction('rightTurnDown')">R'</n-button>

    <n-h3>Moves</n-h3>
    <n-button type="primary" @click="handleAction('turnLeft')">Turn Left</n-button>
    <n-button type="primary" @click="handleAction('turnRight')">Turn Right</n-button>
    <n-button type="primary" @click="handleAction('turnUp')">Turn Up</n-button>
    <n-button type="primary" @click="handleAction('turnDown')">Turn Down</n-button>
    <n-button type="primary" @click="handleAction('turnCW')">Clockwise</n-button>
    <n-button type="primary" @click="handleAction('turnCCW')">Counter-Clockwise</n-button>

    <n-h3>Tools</n-h3>
    <n-button type="primary" @click="handleAction('reset')">Reset</n-button>
    <n-button type="primary" @click="handleAction('shuffle')">Shuffle</n-button>
    <n-button type="primary" @click="handleAction('solve')">Solve (TODO)</n-button>
</n-flex>
</template>

<style scoped>
.control-panel {
  padding: 1em;
}
</style>
