const svgns = "http://www.w3.org/2000/svg";

export function createCircle(totalNumberOfBeam, currentBeam, step) {
    const circle = document.createElementNS(svgns, 'circle');
	circle.setAttributeNS(null, 'r', 1);
	circle.setAttributeNS(null, 'cx', 20);
	circle.setAttributeNS(null, 'cy', 20);
	// circle.setAttributeNS(null, 'ray', ray);
	// circle.setAttributeNS(null, 'data-step', step);

	// const cx = distanceFromCenter * Math.cos(angle * ray) + windowCenterX;
	// const cy = distanceFromCenter * Math.sin(angle * ray) + windowCenterY;

	// circle.setAttributeNS(null, 'style', `stroke: rgba(${color.red},${color.green},${color.blue}, ${color.alpha});`);
	circle.setAttributeNS(null, 'style', `stroke: rgb(0,0,0);`);

	// const circleAnimation = createCircleAnimation(distanceFromCenter, circleRadius, ray, angle, step, cx, cy);
	// circle.appendChild(circleAnimation);

	return circle;
}