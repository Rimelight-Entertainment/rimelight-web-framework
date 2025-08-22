import { pick } from './runtime/utils'
import icons from './theme/icons'

export const getDefaultRimelightWebFrameworkConfig = (colors?: string[]) => ({
  colors: pick({
    primary: 'green',
    secondary: 'blue',
    tertiary: 'yellow',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    neutral: 'neutral'
  }, [...(colors || []), 'neutral' as any]),
  icons
})

export const defaultOptions = {

}

export const resolveColors = (colors?: string[]) => {
  return colors?.length
    ? [...new Set(['primary', ...colors])]
    : ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error']
}
