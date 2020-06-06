export function getCirclesForNumberOfBeams(numberOfBeams, config) {
  const output = [];
  const angle = Math.PI / numberOfBeams;
  const sinOfAngle = Math.sin(angle);
  const factor = (1 - sinOfAngle) / (1 + sinOfAngle);

  let distanceFromCenter = 1 / (1 + sinOfAngle);
  let radius = sinOfAngle / (1 + sinOfAngle);

  const maximumNumberOfBeams = config.maximumBeams ? Math.min(config.maximumBeams, numberOfBeams) : numberOfBeams;

  for (let ring = 0; ring < config.maximumRings; ring++) {
    for (let beam = 0; beam < maximumNumberOfBeams; beam++) {
      const cx = 1 + distanceFromCenter * Math.cos(angle * 2 * beam);
      const cy = 1 + distanceFromCenter * Math.sin(angle * 2 * beam);

      output.push({ cy, cx, radius, beam, angle, ring, numberOfBeams, distanceFromCenter });
    }

    radius = radius * factor;
    distanceFromCenter = distanceFromCenter * factor;
  }

  return output;
}

export function getGridLines() {
  const horizontal = [];
  const vertical = [];
  const density = 20;

  for (let i = 0; i <= 2 * density; i++) {
    horizontal.push({
      x1: i / density,
      y1: 0,
      x2: i / density,
      y2: 2,
    });
    vertical.push({
      y1: i / density,
      x1: 0,
      y2: i / density,
      x2: 2,
    });
  }

  return horizontal.concat(vertical);
}
