import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['**/tests/**/*.spec.ts'],
        watchExclude: ['**/node_modules/**', '**/dist/**', '**/tests/**'],
        coverage: {
            enabled: true,
            provider: 'istanbul',
            exclude: ['src/infra/', 'src/domain/entities', 'src/main/env/Environment.ts'],
        },
    },
    plugins: [tsconfigPaths()],
})