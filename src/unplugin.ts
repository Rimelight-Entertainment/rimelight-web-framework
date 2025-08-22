import { fileURLToPath } from 'node:url'

import { normalize } from 'pathe'
import type { UnpluginOptions } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options as AutoImportOptions } from 'unplugin-auto-import/types'
import type { Options as ComponentsOptions } from 'unplugin-vue-components/types'
import { defu } from 'defu'
import tailwind from '@tailwindcss/vite'
import type colors from 'tailwindcss/colors'

import type * as rimelightWebFramework from '#build/rimelightWebFramework'

import { defaultOptions, getDefaultRimelightWebFrameworkConfig, resolveColors } from './defaults'
import type { ModuleOptions } from './module'
import type icons from './theme/icons'

import TemplatePlugin from './plugins/templates'
import PluginsPlugin from './plugins/plugins'
import AppConfigPlugin from './plugins/app-config'
import ComponentImportPlugin from './plugins/components'
import NuxtEnvironmentPlugin from './plugins/nuxt-environment'
import AutoImportPlugin from './plugins/auto-import'

import type { TVConfig } from './runtime/types/tv'

type NeutralColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
type Color = Exclude<keyof typeof colors, 'inherit' | 'current' | 'transparent' | 'black' | 'white' | NeutralColor> | (string & {})

type AppConfigRimelightWebFramework = {
  // TODO: add type hinting for colors from `options.theme.colors`
  colors?: Record<string, Color> & { neutral?: NeutralColor }
  icons?: Partial<typeof icons>
} & TVConfig<typeof rimelightWebFramework>

export interface RimelightWebFrameworkOptions extends Omit<ModuleOptions, 'fonts' | 'colorMode'> {
  /** Whether to generate declaration files for auto-imported components. */
  dts?: boolean
  rimelightWebFramework?: AppConfigRimelightWebFramework
  /**
   * Enable or disable `@vueuse/core` color-mode integration
   * @defaultValue `true`
   */
  colorMode?: boolean
  /**
   * Override options for `unplugin-auto-import`
   */
  autoImport?: Partial<AutoImportOptions>
  /**
   * Override options for `unplugin-vue-components`
   */
  components?: Partial<ComponentsOptions>
  /**
   * Enables compatibility layer for InertiaJS
   */
  inertia?: boolean
}

export const runtimeDir = normalize(fileURLToPath(new URL('./runtime', import.meta.url)))

export const RimelightWebFrameworkPlugin = createUnplugin<RimelightWebFrameworkOptions | undefined>((_options = {}, meta) => {
  const options = defu(_options, { fonts: false }, defaultOptions)

  options.theme = options.theme || {}
  options.theme.colors = resolveColors(options.theme.colors)

  const appConfig = defu({ rimelightWebFramework: options.rimelightWebFramework, colorMode: options.colorMode }, { ui: getDefaultRimelightWebFrameworkConfig(options.theme.colors) })

  return [
    NuxtEnvironmentPlugin(options),
    ComponentImportPlugin(options, meta),
    AutoImportPlugin(options, meta),
    tailwind(),
    PluginsPlugin(options),
    TemplatePlugin(options, appConfig),
    AppConfigPlugin(options, appConfig),
    <UnpluginOptions>{
      name: 'nuxt:rimelightWebFramework:plugins-duplication-detection',
      vite: {
        configResolved(config) {
          const plugins = config.plugins || []

          if (plugins.filter(i => i.name === 'unplugin-auto-import').length > 1) {
            throw new Error('[Rimelight Web Framework] Multiple instances of `unplugin-auto-import` detected. Nuxt UI includes `unplugin-auto-import` already, and you can configure it using `autoImport` option in Nuxt UI module options.')
          }
          if (plugins.filter(i => i.name === 'unplugin-vue-components').length > 1) {
            throw new Error('[Rimelight Web Framework] Multiple instances of `unplugin-vue-components` detected. Nuxt UI includes `unplugin-vue-components` already, and you can configure it using `components` option in Nuxt UI module options.')
          }
        }
      }
    }
  ].flat(1) as UnpluginOptions[]
})
