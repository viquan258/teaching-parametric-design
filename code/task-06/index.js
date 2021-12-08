const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;


const getParameterDefinitions = () => {
  // here we return the definitions of our parameters
  return [
    {name: 'size', caption: 'Size:', type: 'float', initial: 15},
  ];
};


const {polyhedron} = jscad.primitives;

function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {x, y};
}

const main = (parameters) => {


  const height = parameters.size;

  const top = [0, 0, height];
  const bottom = [0, 0, -height];

  const numPoints = 10;
  const radius = height;

  const points = [top, bottom];
 
  for (let p = 0; p < numPoints; p += 1) {
    const point = polar(radius, 360 / numPoints * p);
    points.push([point.x, point.y, 0]);
  }
  
  const faces = [];

  for (let p = 0; p < numPoints; p += 1) {
    // top
    let p1 = p + 2;
    let p2 = p + 3;
    let p3 = 0;
    if (p === numPoints - 1) {
      p2 = 2;
    }
    faces.push([p1, p2, p3]);

    // bottom
    p3 = 1;
    faces.push([p3, p2, p1]); 
  }

  let shape = polyhedron({
    points: points,
    faces: faces,
    orientation: 'outward'
  });

  const circle1 = circle({
    radius: height,
    segments: 4,
    center: [0, 0, 0]
});

const circle2 = circle({
  radius: height - 1 ,
  segments: 10,
  center: [0, 0, 0]
});

const extrudeShape = extrudeLinear({height: 5}, circle1, circle2);

const unionShape = union(extrudeShape, shape);

const rotateShape = [];
for(let c = 0; c < 5 ; c += 1) {

  rotateShape.push( rotate(
    [0, Math.PI/3*c, 0],
unionShape
  ))

}

 
  return rotateShape;



};

module.exports = { main, getParameterDefinitions };