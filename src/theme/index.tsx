import { useMemo } from 'react'
// material
import { CssBaseline, ThemeOptions } from '@mui/material'
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
//
import shape from './shape'
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'
import { Theme } from '@mui/system/createTheme'

export type CustomTheme = Theme & {
  customShadows: typeof customShadows
}

// ----------------------------------------------------------------------

export default function ThemeConfig({ children }: { children: JSX.Element[] | JSX.Element }) {
  const themeOptions: ThemeOptions = useMemo(() => {
    const theme = {
      palette,
      shape,
      typography,
      shadows: shadows as any,
      customShadows,
    }

    return theme
  }, [])

  const theme = createTheme(themeOptions) as any as CustomTheme
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
