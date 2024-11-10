'use client'
import { useTheme, useMediaQuery } from "@mui/material";

 const FontSize = (baseSize: number) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  if (isSmallScreen) return baseSize * 0.6;
  if (isMediumScreen) return baseSize * 0.8;
  return baseSize;
};


 const Spacing = (baseSpacing: number) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  if (isSmallScreen) return baseSpacing * 0.5;  // giảm 50% cho màn hình nhỏ
  if (isMediumScreen) return baseSpacing * 0.8; // giảm 20% cho màn hình trung bình
  return baseSpacing;
};

export {FontSize, Spacing}