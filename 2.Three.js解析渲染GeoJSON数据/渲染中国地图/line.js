import * as THREE from 'three';

const getLine = (pointArr) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(pointArr);
  const attribue = new THREE.BufferAttribute(vertices, 3);
  geometry.attributes.position = attribue;
  const material = new THREE.LineBasicMaterial({
    color: 0x00ffff,
  });
  const line = new THREE.Line(geometry, material);
  return line;
};

const getBoundaryLine = (coordinates) => {
  const group = new THREE.Group();
    // 多个图形绘制
  coordinates.forEach((item) => {
    const pointArr = [];
    item[0].forEach((item1) => {
      pointArr.push(item1[0], item1[1], 0);
    });
    group.add(getLine(pointArr));
  });
  return group;
};

export {
  getLine,
  getBoundaryLine
}