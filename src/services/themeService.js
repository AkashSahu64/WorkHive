export const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

export const saveTheme = (theme) => {
  localStorage.setItem('theme', theme);
};