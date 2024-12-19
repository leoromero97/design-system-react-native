import React, { createContext, useContext, useState, useEffect } from 'react'

import type { ThemeProviderPropTypes, ThemeContextType, ThemeObject } from './types'
import useFonts from '../../hooks/useFonts'

// Creamos el context
const ThemeContext = createContext<ThemeContextType | undefined>({
  fontsLoaded: false,
  fontFamily: 'system',
  theme: undefined
})

// Creamos un custom hook para que usen los children para acceder al context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider')
  }
  return context
}

export const useCelestearTheme = (): ThemeObject | undefined => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider')
  }
  return context.theme
}

const ThemeProvider: React.FC<ThemeProviderPropTypes> = ({ children, theme: propThene }) => {
  const [theme, setTheme] = useState<ThemeContextType>({
    fontsLoaded: false,
    fontFamily: 'System',
    theme: propThene
  })

  const { fontsLoaded, error } = useFonts({
    OpenSansRegular: require('../../assets/fonts/openSans/OpenSans-Regular.ttf'),
/*     OpenSansMedium: require('../../assets/fonts/openSans/OpenSans-Medium.ttf'),
    OpenSansSemiBold: require('../../assets/fonts/OpenSans-SemiBold.ttf'),
    OpenSansBold: require('../../assets/fonts/OpenSans-Bold.ttf') */
  })

  useEffect(() => {
    if (fontsLoaded) {
      setTheme((prevTheme) => ({
        ...prevTheme,
        fontsLoaded: true,
        fontFamily: 'OpenSansRegular'
      }))
    } else {
      setTheme((prevTheme) => ({
        ...prevTheme,
        fontsLoaded: false,
        fontFamily: 'System'
      }))
    }
  }, [fontsLoaded, error])

  useEffect(() => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      theme: propThene
    }))
  }, [propThene])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
