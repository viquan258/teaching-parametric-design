const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const shape = ellipse({
    center: [0, 0],
    radius: [1,10],
    startAngle: 0,
    endAngle: Math.PI * 2, //full arc
    segments: 16 // level of detail
  });

const leaf = arc({
  center: [0, 0],
  radius: 20,
  startAngle: 0,
  endAngle: Math.PI * 2, //full arc
  segments: 32 // level of detail
});


const extrudeShape = extrudeLinear({height: 0.2}, shape);

//const rotated = rotate([0, Math.PI*1.3, 0], extrudeShape)

//return rotated;
return extrudeShape;

}


module.exports = { main };