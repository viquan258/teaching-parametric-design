const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {

  let values = [8,3,4,6,7,8,10,14,18, 16, 15, 13, 10, 7, 10, 9, 5]

  for(let i = 0; i <= 20; i ++)
  {
    
    for(let l = 0; l <= values.length; l++)
    {

  const circle1 = circle({
    radius: values[l],
    segments: 3,
    center: [2 , 8 ]
    console.log(values[l])
})
    }

const circle2 = circle({
  radius: 4,
  segments: 3,
  center: [-4.3 , -4 ]
})

const circle3 = circle({
  radius: 4,
  segments: 3,
  center: [-4.3 , -11.5 ]
})

const circle4 = circle({
  radius: 4,
  segments: 3,
  center: [ 9, 4]
})

const circle5 = circle({
  radius: 4,
  segments: 3,
  center: [5, 9]
})

const circle6 = circle({
  radius: 4,
  segments: 3,
  center: [-10 , -8]
})

const circle7 = circle({
  radius: 4,
  segments: 3,
  center: [8, 12]
})

const rotateShape = (rotate(
  [0, 0, 110],
circle2, circle3, circle6
))



const extrudeShape1 = extrudeLinear({height: 1}, circle1, circle4, circle7, rotateShape);


const unionShape1 = union(extrudeShape1);




 
  return unionShape1;

}


module.exports = { main };