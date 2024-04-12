import * as THREE from 'three';

const getExtrudeShapMesh = (shapeArr) => {
  const shapeGeometry = new THREE.ExtrudeGeometry(shapeArr, {
    depth: 2, //拉伸长度
    bevelEnabled: false, //禁止倒角,默认true
  });
  const material = new THREE.MeshBasicMaterial({
    color: 0x004444,
  });
  const mesh = new THREE.Mesh(shapeGeometry, material);
  return mesh
};
const getExtrudeMeshShap = (coordinates) => {
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
  return getExtrudeShapMesh(shapeArr);
};

export {
  getExtrudeMeshShap
};