import { defu } from 'defu'
import { createResolver, defineNuxtModule, addComponentsDir, addImportsDir, addVitePlugin, addPlugin, installModule, hasNuxtModule } from '@nuxt/kit'
import { addTemplates } from './templates'
import { defaultOptions, getDefaultRimelightWebFrameworkConfig, resolveColors } from './defaults'
import { name, version } from '../package.json'

export type * from './runtime/types'

type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error' | (string & {})
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {})

export interface ModuleOptions {
  /**
   * Customize how the theme is generated
   */
  theme?: {
    /**
     * Define the color aliases available for components
     * @defaultValue `['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error']`
     */
    colors?: Color[]

    defaultVariants?: {
      /**
       * The default color variant to use for components
       * @defaultValue `'primary'`
       */
      color?: Color
    }
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    docs: 'https://rimelight.com',
    configKey: 'rimelightWebFramework',
    compatibility: {
      nuxt: "^4.0.0",
    },
  },
  defaults: defaultOptions,
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    options.theme = options.theme || {}
    options.theme.colors = resolveColors(options.theme.colors)

    nuxt.options.rimelightWebFramework = options

    nuxt.options.alias['#rimelightWebFramework'] = resolve('./runtime')

    nuxt.options.appConfig.rimelightWebFramework = defu(nuxt.options.appConfig.rimelightWebFramework || {}, getDefaultRimelightWebFrameworkConfig(options.theme.colors))

    // Isolate the root node from portaled components
    nuxt.options.app.rootAttrs = nuxt.options.app.rootAttrs || {}
    nuxt.options.app.rootAttrs.class = [nuxt.options.app.rootAttrs.class, 'isolate'].filter(Boolean).join(' ')

    if (nuxt.options.builder === '@nuxt/vite-builder') {
      const plugin = await import('@tailwindcss/vite').then(r => r.default)
      addVitePlugin(plugin())
    } else {
      nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
    }

    async function registerModule(name: string, key: string, options: Record<string, any>) {
      if (!hasNuxtModule(name)) {
        await installModule(name, defu((nuxt.options as any)[key], options))
      } else {
        (nuxt.options as any)[key] = defu((nuxt.options as any)[key], options)
      }
    }

    await registerModule('@nuxtjs/color-mode', 'colorMode', {
      classSuffix: '',
    })

    await registerModule('@nuxt/icon', 'icon', {
      cssLayer: 'components'
    })

    await registerModule('@nuxt/fonts', 'fonts', {
      defaults: {
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    })

    addPlugin({ src: resolve('./runtime/plugins/colors') })

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: "RL",
      pathPrefix: false,
      global: true,
      watch: true,
    })

    addImportsDir(resolve('./runtime/composables'))

    addTemplates(options, nuxt, resolve)

    nuxt.hook("ready", () => {
      console.log("Rimelight Web Framework enabled!");
    });
  }
})
