declare module "vanta/dist/vanta.net.min.js" {
  import type * as THREE from "three"

  type VantaNetOptions = {
    el: HTMLElement
    THREE: typeof THREE
    color: number
    backgroundColor: number
    backgroundAlpha: number
    points: number
    maxDistance: number
    spacing: number
    showDots: boolean
    mouseControls: boolean
    mouseEase: boolean
    touchControls: boolean
    gyroControls: boolean
    scale: number
    scaleMobile: number
  }

  type VantaEffect = {
    destroy: () => void
    setOptions: (options: { color: number }) => void
    triggerMouseMove: (x: number, y: number) => void
    width: number
    height: number
  }

  const vantaModule: {
    default: (options: VantaNetOptions) => VantaEffect
  }

  export default vantaModule
}
