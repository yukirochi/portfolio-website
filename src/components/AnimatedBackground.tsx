import { useEffect, useRef } from "react"

type AnimatedBackgroundProps = {
  isDark: boolean
}

function AnimatedBackground({ isDark }: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDarkRef = useRef(isDark)
  const effectRef = useRef<{
    destroy: () => void
    setOptions: (options: { color: number }) => void
    triggerMouseMove: (x: number, y: number) => void
    width: number
    height: number
  } | null>(null)

  useEffect(() => {
    isDarkRef.current = isDark
    const effect = effectRef.current

    if (!effect) {
      return
    }

    effect.setOptions({
      color: isDark ? 0x7998b5 : 0x557b9d,
    })
    effect.triggerMouseMove(
      effect.width * (isDark ? 0.72 : 0.28),
      effect.height * 0.38
    )
  }, [isDark])

  useEffect(() => {
    const container = containerRef.current

    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const backgroundElement = container
    let cancelled = false
    async function initializeEffect() {
      const [{ default: vantaModule }, THREE] = await Promise.all([
        import("vanta/dist/vanta.net.min.js"),
        import("three"),
      ])

      if (cancelled) {
        return
      }

      effectRef.current = vantaModule.default({
        el: backgroundElement,
        THREE,
        color: isDarkRef.current ? 0x7998b5 : 0x557b9d,
        backgroundColor: 0xffffff,
        backgroundAlpha: 0,
        points: 10,
        maxDistance: 18,
        spacing: 22,
        showDots: true,
        mouseControls: false,
        mouseEase: true,
        touchControls: false,
        gyroControls: false,
        scale: 1,
        scaleMobile: 1,
      })
    }

    void initializeEffect().catch((error: unknown) => {
      console.error("Could not initialize the Vanta NET background.", error)
    })

    return () => {
      cancelled = true
      effectRef.current?.destroy()
      effectRef.current = null
    }
  }, [])

  return <div aria-hidden="true" className="portfolio-background" ref={containerRef} />
}

export default AnimatedBackground
