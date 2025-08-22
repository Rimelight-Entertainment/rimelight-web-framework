import type { UnpluginOptions } from 'unplugin'

import type { RimelightWebFrameworkOptions } from '../unplugin'

/**
 * This plugin injects Nuxt UI configuration into the runtime build so Nuxt UI components can
 * access it.
 */
export default function AppConfigPlugin(options: RimelightWebFrameworkOptions & { theme: NonNullable<RimelightWebFrameworkOptions['theme']> }, appConfig: Record<string, any>) {
  return {
    name: 'nuxt:rimelightWebFramework:app-config',
    enforce: 'pre',
    resolveId(id) {
      if (id === '#build/app.config') {
        return 'virtual:rimelightWebFramework-app-config'
      }
    },
    loadInclude: id => id === 'virtual:rimelightWebFramework-app-config',
    load() {
      return `
          export default ${JSON.stringify(appConfig!)}
        `
    },
    vite: {
      config() {
        return {
          test: {
            server: {
              deps: {
                inline: ['@rimelight/rimelight-web-framework']
              }
            }
          }
        }
      }
    }
  } satisfies UnpluginOptions
}
