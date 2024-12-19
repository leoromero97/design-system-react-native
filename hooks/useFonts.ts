import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

type UseFontsResult = {
  fontsLoaded: boolean
  error: Error | null
}

type FontMap = {
  [fontName: string]: Font.FontSource
}

const useFonts = (fontMap: FontMap): UseFontsResult => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadFonts = async (): Promise<void> => {
      try {
        await Font.loadAsync(fontMap)
        setFontsLoaded(true)
      } catch (err) {
        setError(err as Error)
        setFontsLoaded(false)
      }
    }

    loadFonts().catch((err) => {
      setError(err as Error)
      setFontsLoaded(false)
    })
    return () => {}
  }, [fontMap])

  return { fontsLoaded, error }
}

export default useFonts