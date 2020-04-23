export default () => {
  if (typeof window !== 'undefined') {
    const width = window.width || width.innerWidth;
    const height = window.height || height.innerHeight;

    return { width, height };
  }

  return {};
}
