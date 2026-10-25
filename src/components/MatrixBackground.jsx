import { useEffect, useRef } from 'react'

function MatrixBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return // Защита, если элемент еще не отрендерился

        const ctx = canvas.getContext('2d')
        if (!ctx) return // Защита для старых браузеров

        let width = window.innerWidth
        let height = window.innerHeight

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        window.addEventListener('resize', resize)
        resize()

        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF'.split('')
        const fontSize = 16
        const columns = Math.floor(width / fontSize)
        const drops = []

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
            ctx.fillRect(0, 0, width, height)

            ctx.fillStyle = '#00ff41'
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)]
                ctx.fillText(text, i * fontSize, drops[i] * fontSize)

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            }
        }

        const interval = setInterval(draw, 50)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                opacity: 0.15,
                pointerEvents: 'none',
            }}
        />
    )
}

export default MatrixBackground