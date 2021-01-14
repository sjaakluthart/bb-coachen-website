const getBackgroundStyles = (imageUrl: string, opacity = 0.45) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${imageUrl})`,
});

export default getBackgroundStyles;
