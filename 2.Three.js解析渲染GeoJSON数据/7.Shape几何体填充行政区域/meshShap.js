import * as THREE from 'three';

const getShapMesh = (shapeArr) => {
  const shapeGeometry = new THREE.ShapeBufferGeometry(shapeArr);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.3
  });
  const mesh = new THREE.Mesh(shapeGeometry, material);
  return mesh
};
const getMeshShap = (coordinates) => {
  // const group = new THREE.Group();
  const shapeArr = [];
    // 多个图形绘制
  coordinates.forEach((item) => {
    const pointArr = [];
    item[0].forEach((item1) => {
      
      pointArr.push(new THREE.Vector2(item1[0], item1[1]));
      
    });
    const shape = new THREE.Shape(pointArr);
      shapeArr.push(shape);
   
  });
  return getShapMesh(shapeArr);
};

export {
  getMeshShap
};