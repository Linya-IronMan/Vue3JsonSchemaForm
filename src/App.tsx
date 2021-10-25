import { reactive, ref, defineComponent, h } from "vue"
import HelloWorld from "./components/HelloWorld.vue"
const img = require("./assets/logo.png") // eslint-disable-line

const getHelloWorld = (age: number) => {
  return <HelloWorld age={age} />
}

export default defineComponent({
  setup() {
    const age = ref(12)
    setInterval(() => {
      age.value += 2
    }, 1000)

    return () => {
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{age.value}1</p>
          {getHelloWorld(12)}
        </div>
      )
    }
  },
})
