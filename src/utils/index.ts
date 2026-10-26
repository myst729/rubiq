export type Matrix4_4 = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
]

const originalMatrix3d: Matrix4_4 =  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

const matrix3dRotations = {
  left:  [0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] as Matrix4_4,
  right: [0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] as Matrix4_4,
  up:    [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1] as Matrix4_4,
  down:  [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1] as Matrix4_4,
  cw:    [0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1] as Matrix4_4,
  ccw:   [0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] as Matrix4_4,
}

export type Rotation = keyof typeof matrix3dRotations

const multiplyMatrix4_4 = (a: Matrix4_4, b: Matrix4_4): Matrix4_4 => {
  return [
    a[0]  * b[0] + a[1]  * b[4] + a[2]  * b[8]  + a[3]  * b[12],
    a[0]  * b[1] + a[1]  * b[5] + a[2]  * b[9]  + a[3]  * b[13],
    a[0]  * b[2] + a[1]  * b[6] + a[2]  * b[10] + a[3]  * b[14],
    a[0]  * b[3] + a[1]  * b[7] + a[2]  * b[11] + a[3]  * b[15],
    a[4]  * b[0] + a[5]  * b[4] + a[6]  * b[8]  + a[7]  * b[12],
    a[4]  * b[1] + a[5]  * b[5] + a[6]  * b[9]  + a[7]  * b[13],
    a[4]  * b[2] + a[5]  * b[6] + a[6]  * b[10] + a[7]  * b[14],
    a[4]  * b[3] + a[5]  * b[7] + a[6]  * b[11] + a[7]  * b[15],
    a[8]  * b[0] + a[9]  * b[4] + a[10] * b[8]  + a[11] * b[12],
    a[8]  * b[1] + a[9]  * b[5] + a[10] * b[9]  + a[11] * b[13],
    a[8]  * b[2] + a[9]  * b[6] + a[10] * b[10] + a[11] * b[14],
    a[8]  * b[3] + a[9]  * b[7] + a[10] * b[11] + a[11] * b[15],
    a[12] * b[0] + a[13] * b[4] + a[14] * b[8]  + a[15] * b[12],
    a[12] * b[1] + a[13] * b[5] + a[14] * b[9]  + a[15] * b[13],
    a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
    a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15]
  ]
}

const matrixRotate = (matrix3d: Matrix4_4, rotation: Rotation): Matrix4_4 => {
  return multiplyMatrix4_4(matrix3d, matrix3dRotations[rotation] as Matrix4_4)
}

export type RubikCubeItem = {
  tx: number
  ty: number
  tz: number
  matrix3d: Matrix4_4,
  label: string,
}

export type RubikCubeData = [
  RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem,
  RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem,
  RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem, RubikCubeItem,
]

export type RubikCubeState = [
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
]

export const rubikCubeData: RubikCubeData = [
  { tx: -1, ty: -1, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-back-down' },
  { tx:  0, ty: -1, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-back-down' },
  { tx:  1, ty: -1, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-back-down' },
  { tx: -1, ty:  0, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-center-down' },
  { tx:  0, ty:  0, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-center-down' },
  { tx:  1, ty:  0, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-center-down' },
  { tx: -1, ty:  1, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-front-down' },
  { tx:  0, ty:  1, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-front-down' },
  { tx:  1, ty:  1, tz: -1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-front-down' },
  { tx: -1, ty: -1, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-back-center' },
  { tx:  0, ty: -1, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-back-center' },
  { tx:  1, ty: -1, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-back-center' },
  { tx: -1, ty:  0, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-center-center' },
  { tx:  0, ty:  0, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-center-center' },
  { tx:  1, ty:  0, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-center-center' },
  { tx: -1, ty:  1, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-front-center' },
  { tx:  0, ty:  1, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-front-center' },
  { tx:  1, ty:  1, tz:  0, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-front-center' },
  { tx: -1, ty: -1, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-back-up' },
  { tx:  0, ty: -1, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-back-up' },
  { tx:  1, ty: -1, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-back-up' },
  { tx: -1, ty:  0, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-center-up' },
  { tx:  0, ty:  0, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-center-up' },
  { tx:  1, ty:  0, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-center-up' },
  { tx: -1, ty:  1, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'left-front-up' },
  { tx:  0, ty:  1, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'center-front-up' },
  { tx:  1, ty:  1, tz:  1, matrix3d: [...originalMatrix3d] as Matrix4_4, label: 'right-front-up' },
]

const commands = {
  upTurnLeft: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[r, s, t, u, v, w, x, y, z].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'left')
    })
    return [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, x, u, r, y, v, s, z, w, t]
  },

  upTurnRight: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[r, s, t, u, v, w, x, y, z].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'right')
    })
    return [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, t, w, z, s, v, y, r, u, x]
  },

  frontTurnCW: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[g, h, i, o, p, q, x, y, z].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'cw')
    })
    return [a, b, c, d, e, f, i, q, z, j, k, l, m, _, n, h, p, y, r, s, t, u, v, w, g, o, x]
  },

  frontTurnCCW: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[g, h, i, o, p, q, x, y, z].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'ccw')
    })
    return [a, b, c, d, e, f, x, o, g, j, k, l, m, _, n, y, p, h, r, s, t, u, v, w, z, q, i]
  },

  leftTurnUp: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[a, d, g, j, m, o, r, u, x].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'up')
    })
    return [r, b, c, j, e, f, a, h, i, u, k, l, m, _, n, d, p, q, x, s, t, o, v, w, g, y, z]
  },

  leftTurnDown: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[a, d, g, j, m, o, r, u, x].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'down')
    })
    return [g, b, c, o, e, f, x, h, i, d, k, l, m, _, n, u, p, q, a, s, t, j, v, w, r, y, z]
  },

  rightTurnUp: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[c, f, i, l, n, q, t, w, z].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'up')
    })
    return [a, b, t, d, e, l, g, h, c, j, k, w, m, _, n, o, p, f, r, s, z, u, v, q, x, y, i]
  },

  rightTurnDown: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    ;[c, f, i, l, n, q, t, w, z].forEach((i) => {
      const item = data[i] as RubikCubeItem
      item.matrix3d = matrixRotate(item.matrix3d, 'down')
    })
    return [a, b, i, d, e, q, g, h, z, j, k, f, m, _, n, o, p, w, r, s, c, u, v, l, x, y, t]
  },
}

const moves = {
  turnLeft: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    data.forEach((item: RubikCubeItem) => {
      item.matrix3d = matrixRotate(item.matrix3d, 'left')
    })
    return [g, d, a, h, e, b, i, f, c, o, m, j, p, _, k, q, n, l, x, u, r, y, v, s, z, w, t]
  },

  turnRight: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    data.forEach((item: RubikCubeItem) => {
      item.matrix3d = matrixRotate(item.matrix3d, 'right')
    })
    return [c, f, i, b, e, h, a, d, g, l, n, q, k, _, p, j, m, o, t, w, z, s, v, y, r, u, x]
  },

  turnUp: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    data.forEach((item: RubikCubeItem) => {
      item.matrix3d = matrixRotate(item.matrix3d, 'up')
    })
    return [r, s, t, j, k, l, a, b, c, u, v, w, m, _, n, d, e, f, x, y, z, o, p, q, g, h, i]
  },

  turnDown: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    data.forEach((item: RubikCubeItem) => {
      item.matrix3d = matrixRotate(item.matrix3d, 'down')
    })
    return [g, h, i, o, p, q, x, y, z, d, e, f, m, _, n, u, v, w, a, b, c, j, k, l, r, s, t]
  },

  turnCW: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    data.forEach((item: RubikCubeItem) => {
      item.matrix3d = matrixRotate(item.matrix3d, 'cw')
    })
    return [c, l, t, f, n, w, i, q, z, b, k, s, e, _, v, h, p, y, a, j, r, d, m, u, g, o, x]
  },
  
  turnCCW: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, _, n, o, p, q, r, s, t, u, v, w, x, y, z] = state
    data.forEach((item: RubikCubeItem) => {
      item.matrix3d = matrixRotate(item.matrix3d, 'ccw')
    })
    return [r, j, a, u, m, d, x, o, g, s, k, b, v, _, e, y, p, h, t, l, c, w, n, f, z, q, i]
  },
}

const tools = {
  reset: (data: RubikCubeData): RubikCubeState => {
    data.forEach((item: RubikCubeItem) => {
      item.matrix3d = [...originalMatrix3d]
    })
    return data.map((_, i) => i) as RubikCubeState
  },

  shuffle: (data: RubikCubeData): RubikCubeState => {
    let state = tools.reset(data)
    const steps = {
      ...commands,
      ...moves,
    }
    const choices = Object.keys(steps)
    const randomSteps = Array(100).fill(0).map(() => choices[Math.floor(Math.random() * choices.length)])
    randomSteps.forEach(step => {
      state = steps[step as keyof typeof steps](data, state)
    })
    return state
  },

  solve: (data: RubikCubeData, state: RubikCubeState): RubikCubeState => {
    let finalState = tools.reset(data)
    // TODO: Implement solve algorithm
    return finalState
  },
}

export const actions = {
  ...commands,
  ...moves,
  ...tools,
}

export type Action = keyof typeof actions
