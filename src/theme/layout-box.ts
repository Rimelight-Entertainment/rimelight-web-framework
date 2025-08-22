import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    base: 'flex'
  },
  variants: {
    position: {
      static: "static",
      relative: "relative",
      absolute: "absolute",
      fixed: "fixed",
      sticky: "sticky",
    },
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    padding: {
      xs: "p-xs",
      sm: "p-sm",
      md: "p-md",
      lg: "p-lg",
      xl: "p-xl",
    },
    gap: {
      xs: "gap-xs",
      sm: "gap-2",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl",
    },
    alignItems: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justifyContent: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    position: "relative",
    direction: "vertical",
  },
})
