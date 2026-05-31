import { createSystem, defaultConfig } from '@chakra-ui/react'

const theme = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                body: { value: "'JetBrains Mono', 'Fira Code', monospace" },
                heading: { value: "'JetBrains Mono', 'Fira Code', monospace" },
            },
            colors: {
                neon: {
                    yellow: { value: '#fcee0a' },
                    pink: { value: '#ff00ff' },
                    blue: { value: '#00ffff' },
                    green: { value: '#00ff41' },
                },
            },
        },
    },
    globalCss: {
        ':root': {
            '--global-font-body': "'JetBrains Mono', 'Fira Code', monospace",
            '--global-font-heading': "'JetBrains Mono', 'Fira Code', monospace",
        },
        'html, body': {
            backgroundColor: '#0a0a0a',
            color: '#e0e0e0',
            margin: 0,
            padding: 0,
        },
        '::selection': {
            backgroundColor: '#ff00ff',
            color: '#0a0a0a',
        },
        '@keyframes glitch': {
            '0%, 100%': { transform: 'translate(0)' },
            '20%': { transform: 'translate(-2px, 2px)' },
            '40%': { transform: 'translate(2px, -2px)' },
            '60%': { transform: 'translate(-1px, -1px)' },
            '80%': { transform: 'translate(1px, 1px)' },
        },
    },
})

export default theme