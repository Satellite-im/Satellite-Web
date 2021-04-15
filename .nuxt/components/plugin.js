import Vue from 'vue'

const components = {
  Slider: () => import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
