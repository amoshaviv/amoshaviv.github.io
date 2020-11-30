const sphereRadius = 10000000000;
const numberOfBeams = 100000000;
const numberOfLayers = 100000000;
const angle = Math.PI/numberOfBeams;
const cosOfAngle = Math.cos(angle);
const cosDoubleOfAngle = Math.cos(2 *angle);
const sinOfAngle = Math.sin(angle);
const sinOf30 = Math.sin(Math.PI/6);
const sinOfHalfAngle = Math.sin(angle/2);
const factor = sinOfAngle / (1 + sinOfAngle);

function printSpheresStatsEff(spheres) {
    let lastRadius = factor * sphereRadius;
    let lastAngle = Math.PI / 2;
    const output = {
        numberOfBeams,
        numberOfLayers,
        sphereSurfaceArea: 4 * sphereRadius * sphereRadius * Math.PI,
        sphereVolume: 4/3 * sphereRadius * sphereRadius * sphereRadius * Math.PI,
        sumOfAreas: numberOfBeams * lastRadius * lastRadius * Math.PI,
        sumOfVolumes: numberOfBeams * 4/3 * lastRadius * lastRadius * lastRadius * Math.PI,
    };
    console.time('Calculate Approximation');
    for (let i = 1; i < numberOfLayers; i++) {
        const tanOfHalfLastAngle = Math.tan(lastAngle/2);
        lastAngle =  2 * Math.atan((2*(sinOfAngle)**2 + 1)*tanOfHalfLastAngle + Math.sqrt(2) * Math.sqrt((sinOfAngle)**2 * (-(cosDoubleOfAngle - 3))*(tanOfHalfLastAngle)**2));
        lastRadius = ((Math.sin(lastAngle))/(Math.sin(lastAngle)+(1/sinOfAngle))) * sphereRadius;
        output.sumOfAreas += numberOfBeams * lastRadius * lastRadius * Math.PI;
        output.sumOfVolumes += numberOfBeams * 4/3 * lastRadius * lastRadius * lastRadius * Math.PI;
    }
    console.timeEnd('Calculate Approximation');
    output.areaRatio = output.sumOfAreas / output.sphereSurfaceArea;    
    output.volumeRatio = output.sumOfVolumes / output.sphereVolume;
    console.log(output);
    return output;
}

printSpheresStatsEff();