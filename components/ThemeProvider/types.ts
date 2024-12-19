import type { ReactNode } from "react";

// Type del componente ThemeProvider
export type ThemeProviderPropTypes = {
  children?: ReactNode;
  theme?: ThemeObject;
};

// Type del context que utiliza el provider
export type ThemeContextType = {
  fontsLoaded: boolean;
  fontFamily: string;
  theme: ThemeObject | undefined;
};

// Types que conforman el objecto theme
type ThemeColorVariants = {
  dark?: string;
  main?: string;
  soft?: string;
  extraSoft?: string;
};
type ThemeNeutralVariants = {
  900?: string;
  800?: string;
  700?: string;
  600?: string;
  500?: string;
  400?: string;
  300?: string;
  200?: string;
  100?: string;
  50?: string;
  0: string;
};

type ThemeTextColors = {
  light: string;
  dark: string;
};

type ThemeSurfaceVariants = {
  hover?: string;
  pressed?: string;
};

export type ThemeObject = {
  name?: string;
  color?: {
    primary?: ThemeColorVariants;
    secondary?: ThemeColorVariants;
    complementary?: ThemeColorVariants;
    text?: ThemeTextColors;
    neutral?: ThemeNeutralVariants;
    info?: ThemeColorVariants;
    success?: ThemeColorVariants;
    warning?: ThemeColorVariants;
    error?: ThemeColorVariants;
    surface?: ThemeSurfaceVariants;
  };
  components?: {
    checkbox?: {
      titleColor?: string;
      supportingTextColor?: string;
      enabled?: {
        borderColor?: string;
      };
      pressed?: {
        backgroundColor?: string;
      };
      checked?: {
        backgroundColor?: string;
        borderColor?: string;
      };
      hovered?: { backgroundColor?: string };
    };
    spinner?: {
      dark?: {
        primaryColor: string;
        secondaryColor: string;
        labelColor?: string;
      };
      light?: {
        primaryColor: string;
        secondaryColor: string;
        labelColor?: string;
      };
    };
  };
};
