const deepClone = (source) => {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone');
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}
const random = (min, max) => {
  if (min > max) {
    min = [max, max = min][0];
  }
  const range = max - min;
  return (min + Math.round(Math.random() * range));
}
const createRandomColor = ()=>{
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return  `rgb(${r},${g},${b})`
}
export { deepClone, random, createRandomColor}
