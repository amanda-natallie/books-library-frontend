import { useEffect, useMemo, useState } from 'react'
import { MdBrightness4, MdBrightness7 } from 'react-icons/md'

import { ThemeProvider as MuiThemeProvider, useMediaQuery } from '@mui/material'

import { ThemeContext } from '~/app/presentation/contexts'
import { makeDarkTheme, makeLightTheme } from '~/app/presentation/styles'

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(makeLightTheme())

  const toggleTheme = (): void => {
    const newTheme =
      theme.palette.mode === 'light' ? makeDarkTheme() : makeLightTheme()
    setTheme(newTheme)
  }

  const themeMode = useMemo(
    () =>
      theme.palette.mode === 'light' ? <MdBrightness4 /> : <MdBrightness7 />,
    [theme.palette.mode]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme, mode: themeMode }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
