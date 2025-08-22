<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/91ceab67-89ce-4ef4-8678-4402a92baca5">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/51526d6d-e5ec-41b4-aa37-242dec1cdb27">
  <img alt="Rimelight Web Framework" src="https://github.com/user-attachments/assets/51526d6d-e5ec-41b4-aa37-242dec1cdb27">
</picture>

# Rimelight Web Framework

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

The Rimelight Web Framework is an opinionated Nuxt component library used internally at Rimelight Entertainment.

## Documentation

Visit https://rimelight.com to explore the documentation.

## Installation

```bash [pnpm]
pnpm add @rimelight/rimelight-web-framework
```

```bash [yarn]
yarn add @rimelight/rimelight-web-framework
```

```bash [npm]
npm install @rimelight/rimelight-web-framework
```

```bash [bun]
bun add @rimelight/rimelight-web-framework
```

### Nuxt

1. Add the Rimelight Web Framework module in your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@rimelight/rimelight-web-framework']
})
```

2. Import Tailwind CSS and Rimelight Web Framework in your CSS:

```css [assets/css/main.css]
@import "tailwindcss";
@import "@rimelight/rimelight-web-framework";
```

Learn more in the [installation guide](https://ui.nuxt.com/getting-started/installation/nuxt).

## Contribution

Thank you for considering contributing to Rimelight Web Framework. Here are a few ways you can get involved:

- Reporting Bugs: If you come across any bugs or issues, please check out the reporting bugs guide to learn how to submit a bug report.
- Suggestions: Have any thoughts to enhance Rimelight Web Framework? We'd love to hear them! Check out the [contribution guide](https://ui.nuxt.com/getting-started/contribution) to share your suggestions.

## License

Licensed under the [MIT license](https://github.com/nuxt/ui/blob/v3/LICENSE.md).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@rimelight/rimelight-web-framework/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@rimelight/rimelight-web-framework

[npm-downloads-src]: https://img.shields.io/npm/dm/@rimelight/rimelight-web-framework.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npm.chart.dev/@rimelight/rimelight-web-framework

[license-src]: https://img.shields.io/github/license/nuxt/ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/nuxt/ui/blob/v3/LICENSE.md

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
