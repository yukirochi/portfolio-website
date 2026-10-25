import { useEffect, useRef, useState, type ReactNode } from "react"

type ScrollRevealProps = {
  children: ReactNode
}

function ScrollReveal({ children }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px 15% 0px" }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`will-change-[opacity,transform] transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-12 scale-[0.97] opacity-0"
      }`}
      ref={containerRef}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
