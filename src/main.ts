import { createApp, defineComponent, h, createVNode } from "vue"
// import App from "./App.vue"
const img = require("./assets/logo.png") // eslint-disable-line

import HelloWorld from "./components/HelloWorld.vue"
const App = defineComponent({
  setup() {
    return () => {
      return h("div", { id: "app" }, [
        h("img", { alt: "Vue log", src: img }),
        h(HelloWorld as any, { msg: "Hello World", age: 12 }),
      ])
    }
  },
  //   render() {
  //     return createVNode("div", { id: "app" }, [
  //       createVNode("img", { alt: "Vue log", src: img }),
  //       createVNode(HelloWorld, { msg: "Hello World", age: 12 }),
  //     ])
  //   },
})
const app = createApp(App).mount("#app")
