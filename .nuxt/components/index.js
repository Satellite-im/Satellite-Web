export { default as Slider } from '../../components/Slider.vue'

export const LazySlider = import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => c.default || c)
