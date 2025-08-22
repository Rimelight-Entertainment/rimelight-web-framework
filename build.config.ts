import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/module'
  ],
  rollup: {
    replace: {
      delimiters: ['', ''],
      values: {
        'process.argv.includes(\'--rimelightWebFrameworkDev\')': 'false'
      }
    }
  },
  hooks: {
    'mkdist:entry:options'(ctx, entry, options) {
      options.addRelativeDeclarationExtensions = false
    }
  },
  externals: ['#build/rimelightWebFramework']
})
