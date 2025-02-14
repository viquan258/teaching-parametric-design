const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const allPrimitives = [
    cube(),
    cuboid({ size: [1, 2, 3] }),
    roundedCuboid({ size: [2, 3, 2], roundRadius: 0.4, segments: 32 }),
    roundedCuboid({ size: [1, 2, 3], roundRadius: 0.4, segments: 16 }),
    sphere({ radius: 2, segments: 16 }),
    geodesicSphere({ radius: 1.5, segments: 16 }),
    ellipsoid({ radius: [2, 1, 1.5], segments: 64, axes: [[1, 1, 0], [0, -1, 1], [-1, 0, 1]]}),
    cylinder({ radius: 1, height: 5 }),
    roundedCylinder({ radius: 1, height: 8, roundRadius: 0.8 }),
    cylinderElliptic({ height: 8, startRadius: [1, 2], startAngle: 0, endRadius: [1, 2], endAngle: (Math.PI / 8), segments: 32 }),
    cylinder({ start: [0, 0, 0], end: [3, 3, 10], radius: 1 }),
    torus({ innerRadius: 1, outerRadius: 1.2 }),
    torus({ innerRadius: 1, outerRadius: 1.5, innerSegments: 4, outerSegments: 6, innerRotation: 0 })
  ];

  return allPrimitives.map((primitive, index) => {
    return translate([(index % 4 - 2) * 6, Math.floor(index / 4 - 2) * 6, 0], primitive)
  });
};




module.exports = { main };