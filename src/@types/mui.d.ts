import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    astro: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    astro?: React.CSSProperties;
  }
  type TypographyVariant = keyof TypographyVariants;
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    astro: true;
  }
}
