const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

let values = [8,3,4,6,7,8,10,14,18, 16, 15, 13, 10, 7, 10, 9, 5]

const main = () => {

  let values = [8,3,4,6,7,8,10,14,18, 16, 15, 13, 10, 7, 10, 9, 5, 12, 19, 12, 17, 37, 91]



  const circle1 = circle({
    radius: 6,
    segments: 9,
    center: [0, 0, 0]
});



const extrudeShape1 = extrudeLinear({height: 5}, circle1);


const unionShape1 = union(extrudeShape1);


const circles = [];


  for(let l = 0; l <= values.length; l++)
  {
  //Map the radius to c


  circles.push( rotate(
    [0,  0 , Math.PI/2*values[l]],
    translate(
      [0, 0, l*5],
unionShape1
  )));

    }



 
  return circles;

}


module.exports = { main };