export function getCircles(numberOfBeams, maximumSteps) {
    const output = [];
    const angle = Math.PI / (numberOfBeams);
    const sinOfAngle = Math.sin(angle); 
    const factor = (1-sinOfAngle)/(1+sinOfAngle);
    
    let distanceFromCenter = 1/(1+sinOfAngle);
    let radius = sinOfAngle/(1+sinOfAngle);

    for (let step = 0; step < maximumSteps; step++) {
        for (let beam = 0; beam < numberOfBeams; beam++) {
            const cx = 1 + distanceFromCenter * Math.cos(angle * 2 * beam);
            const cy = 1 + distanceFromCenter * Math.sin(angle * 2 * beam);
            
            output.push({ cy, cx, radius, beam, angle, step, distanceFromCenter });
        }

        radius = radius * factor;
        distanceFromCenter = distanceFromCenter * factor;
    }

    return output;
}

// function getCircle(numberOfBeams, step, ray) {
//     const circle = (1-Math.sin(pi*x))**step/(1+sin(pi*x))**(step+1);
// }