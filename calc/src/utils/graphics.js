export function getGraphMaximumRadius() {
  const toolBarHeight = 56;
  const windowCenterX = window.innerWidth / 2;
  const windowCenterY = window.innerHeight - toolBarHeight / 2;
  const maximumGraphRadius = Math.min(windowCenterX, windowCenterY);

  return 0;
}
