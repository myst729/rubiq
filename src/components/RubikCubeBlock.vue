<script setup lang="ts">
import { type RubikCubeItem } from '@/utils/index.ts'

const props = defineProps({
  info: {
    type: Object as () => RubikCubeItem,
    default: () => ({
      tx: 0,
      ty: 0,
      tz: 0,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      label: '',
    }),
  },
})

const defaultColor = '#181818'
const facets = {
  left:  { color: props.info.tx < 0 ? 'coral'  : defaultColor, x: -50, y:   0, z:   0, rotate: 'rotateY(-90deg)' },
  right: { color: props.info.tx > 0 ? 'red'    : defaultColor, x:  50, y:   0, z:   0, rotate: 'rotateY(90deg)'  },
  front: { color: props.info.ty > 0 ? 'blue'   : defaultColor, x:   0, y:  50, z:   0, rotate: 'rotateX(-90deg)' },
  back:  { color: props.info.ty < 0 ? 'lime'   : defaultColor, x:   0, y: -50, z:   0, rotate: 'rotateX(90deg)'  },
  up:    { color: props.info.tz > 0 ? 'yellow' : defaultColor, x:   0, y:   0, z:  50, rotate: 'rotateX(0deg)'   },
  down:  { color: props.info.tz < 0 ? 'white'  : defaultColor, x:   0, y:   0, z: -50, rotate: 'rotateX(180deg)' },
}
</script>

<template>
  <div class="rubik-cube-block" :style="{ transform: `matrix3d(${info.matrix3d.join(', ')})` }">
    <div
      v-for="(facet, dir) in facets"
      :key="dir"
      :class="['rubik-cube-block-facet', dir]"
      :style="{ backgroundColor: facet.color, transform: `translate3d(${info.tx * 100 + facet.x}px, ${info.ty * 100 + facet.y}px, ${info.tz * 100 + facet.z}px) ${facet.rotate}` }"
    ></div>
  </div>
</template>

<style scoped>
.rubik-cube-block {
  width: 100px;
  height: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: center center 0;
  transition: transform .5s ease-in-out;
  will-change: transform;
}
.rubik-cube-block-facet {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 5px solid #181818;
  border-radius: 12px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, .2);
  position: absolute;
  backface-visibility: hidden;
}
</style>
