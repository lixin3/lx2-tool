// src/index.ts
export const getDataType = (data: any) => Object.prototype.toString.call(data);
// 默认导出对象，兼容旧的 import tool from 'pkg'
export default { getDataType };