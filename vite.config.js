import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: ['mzlinux.video-miner.xyz'],
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    mui: ['@mui/material', '@mui/icons-material', '@mui/x-data-grid', '@emotion/react', '@emotion/styled']
                },
            },
        },
    }
})
