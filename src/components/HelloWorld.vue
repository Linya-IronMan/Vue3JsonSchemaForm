<template>
  <div class="hello">{{ state.name }} {{ age }}: {{ age2 }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  computed,
  watchEffect,
} from "vue"

interface Config {
  name: string
}

const PropTypes = {
  msg: String,
  config: {
    type: Object as PropType<Config>,
    required: false,
  },
  age: {
    type: Number,
    required: true,
  },
} as const

export default defineComponent({
  name: "HelloWorld",
  props: PropTypes,

  setup(props, { slots, attrs }) {
    const state = reactive({
      name: "cdt",
    })

    const ageRef = ref(12)

    setInterval(() => {
      ageRef.value += 1
    }, 1000)

    const age2 = computed(() => {
      return ageRef.value + 2
    })

    watchEffect(() => {
      console.log(age2.value, ageRef.value, "watchEffect")
    })

    return {
      state,
      age: ageRef,
      age2,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
