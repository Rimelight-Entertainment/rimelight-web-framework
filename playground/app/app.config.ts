export default defineAppConfig({
  toaster: {
    position: 'bottom-right' as const,
    expand: true,
    duration: 5000
  },
  rimelightWebFramework: {
    theme: {
      colors: {
        primary: 'primary',
        secondary: 'secondary',
        tertiary: 'tertiary',
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error',
        neutral: 'neutral'
      }
    },
  },
})
